import express from 'express';
import { addToCart, getCart, removeFromCart, clearCart } from '../controllers/cartController';
import { authenticate } from '../middleware/authMiddleware'; 
// Ensure this middleware validates the user's authentication

const router = express.Router();

// Add a product to the cart
router.post('/add', authenticate, addToCart);

// Get the user's cart
router.get('/', authenticate, getCart);

// Remove a product from the cart
router.delete('/remove/:productId', authenticate, removeFromCart);

// Clear the cart
router.delete('/clear', authenticate, clearCart);

export default router;
