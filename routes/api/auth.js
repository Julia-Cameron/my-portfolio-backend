import express from 'express';
import { signUp, signIn, signOut } from '../../controllers/auth.controller.js';
import { authenticate } from '../../middleware/auth.middleware.js';
export { router as authRouter };

const router = express.Router();

// Sign up route
router.post('/signup', signUp);

// Sign in route
router.post('/signin', signIn);

// Sign out route
router.post('/signout', authenticate, signOut);

export default router;