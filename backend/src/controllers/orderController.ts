import { Request, Response } from 'express';
import Order, { IOrder } from '../models/placeOrderModel';
import Cart from '../models/cartModel';
import Product from '../models/productModel';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

// Place an order
export const placeOrder = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { shippingAddress } = req.body;

    if (!userId) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    // Validate user's cart
    const cart = await Cart.findOne({ userId });
    if (!cart || cart.items.length === 0) {
      res.status(400).json({ success: false, message: 'Cart is empty' });
      return;
    }

    let totalPrice = 0;

    // Validate stock for each product
    for (const item of cart.items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        res.status(404).json({ success: false, message: `Product not found: ${item.productId}` });
        return;
      }

      if (product.stock < item.quantity) {
        res
          .status(400)
          .json({ success: false, message: `Insufficient stock for product: ${product.name}` });
        return;
      }

      totalPrice += item.quantity * product.price;

      // Reduce stock
      product.stock -= item.quantity;
      await product.save();
    }

    // Create order
    const order = new Order({
      userId,
      products: cart.items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        
      })),
      totalPrice,
      shippingAddress,
    });

    await order.save();

    // Clear cart
    await Cart.findOneAndDelete({ userId });

    res.status(201).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error', error });
  }
};

// Get orders for a user
export const getOrders = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    const orders = await Order.find({ userId });
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error', error });
  }
};
