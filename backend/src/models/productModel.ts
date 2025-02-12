import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      stock: { type: Number, required: true },
      category: { type: String, required: true },
      images: [
        {
          url: { type: String, required: true },
          alt: { type: String, required: false },
        }
      ],
    },
    { timestamps: true }
  );
  

export default mongoose.model<IProduct>('Product', ProductSchema);
