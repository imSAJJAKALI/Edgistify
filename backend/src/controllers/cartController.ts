import { Request, Response } from 'express';
import Cart, { ICartItem } from '../models/cartModel';
import Product from '../models/productModel';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

// Add product to cart
export const addToCart = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    const { productId, quantity } = req.body;

    // Validate product existence and stock
    const product = await Product.findById(productId);
  
    if (!product) {
      res.status(404).json({ success: false, message: 'Product not found' });
      return;
    }
    if (product.stock < quantity) {
      res.status(400).json({ success: false, message: 'Insufficient stock available' });
      return;
    }

    // Find or create the cart
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const existingItemIndex = cart.items.findIndex(
      (item: ICartItem) => item.productId.toString() === productId
    );
    if (existingItemIndex >= 0) {
      // Update quantity if the product is already in the cart
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new product to the cart
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error', error });
  }
};

// Get user's cart
export const getCart = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ success: false, message: 'User not authenticated' });
        return;
      }
  
      // Fetch cart and populate product details
      const cart = await Cart.findOne({ userId }).populate(
        'items.productId', // Reference to Product model
        'name price description title images ' // Fields to populate
      );
  
      if (!cart) {
        res.status(404).json({ success: false, message: 'Cart not found' });
        return;
      }
  
      res.status(200).json({ success: true, data: cart });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error', error });
    }
  };
  

// Remove a product from the cart
export const removeFromCart = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      res.status(404).json({ success: false, message: 'Cart not found' });
      return;
    }

    // Remove the product from the cart
    cart.items = cart.items.filter((item: ICartItem) => item.productId.toString() !== productId);

    await cart.save();
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error', error });
  }
};

// Clear the cart
export const clearCart = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ success: false, message: 'User not authenticated' });
      return;
    }

    const cart = await Cart.findOneAndDelete({ userId });
    if (!cart) {
      res.status(404).json({ success: false, message: 'Cart not found' });
      return;
    }

    res.status(200).json({ success: true, message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error', error });
  }
};
