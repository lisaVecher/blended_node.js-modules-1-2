import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    _id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['books', 'electronics', 'clothing', 'other'],
      required: true,
      default: 'other',
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: 'products',
  },
);

export const Product = model('Product', productSchema);
