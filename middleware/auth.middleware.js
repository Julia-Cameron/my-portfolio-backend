import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    try {
        //Get the authorization header from the request
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Access denied. No token provided.' });
        }

        // Extract the token from the authorization header
        const token = authHeader.split('Bearer ')[1];

        // Verify the token using the JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.auth = decoded; // Attach the decoded token to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Error authenticating token:", error);
        return res.status(401).json({ error: 'Invalid token' });
    }
};