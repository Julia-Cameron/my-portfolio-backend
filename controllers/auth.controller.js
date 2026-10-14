import User from '../models/users.js';
import jwt from 'jsonwebtoken';

// 1. Sign up a new user
export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// 2. Sign in an existing user (Login and generate JWT token)
export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Check if the provided password matches the hashed password in the database
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Generate a JWT token valid for 1 day
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Send token and user information back to the client
        return res.status(200).json({
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        console.error("Error signing in:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Sign out
export const signOut = (req, res) => {
    try {
        // Invalidate the token on the client side by sending an empty token
        return res.status(200).json({ message: 'User signed out successfully', token: '' });
    } catch (error) {
        console.error("Error signing out:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
