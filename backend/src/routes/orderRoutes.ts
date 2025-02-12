import express from 'express';
import { placeOrder, getOrders } from '../controllers/orderController';
import { authenticate } from '../middleware/authMiddleware'; // Assuming you have an authentication middleware

const router = express.Router();

// Place an order
router.post('/place', authenticate, placeOrder);

// Get user orders
router.get('/', authenticate, getOrders);

export default router;
