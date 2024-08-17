import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  images: {
    type: String,
    required: true,
    trim: true
  },
  restaurantName: {
    type: String,
    required: true,
    trim: true
  },
  ratings: {
    type: String,
    required: true,
    trim: true
  },
  itemName: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  itemPrice: {
    type: String,
    required: true,
    trim: true
  },
  deliveredTime: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  offer: {
    type: String,
    trim: true
  }
});

const ProductModel = mongoose.models.product || mongoose.model('product', productSchema);

export default ProductModel;
