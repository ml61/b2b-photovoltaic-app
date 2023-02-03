import mongoose from 'mongoose';

const tempOrderSchema = new mongoose.Schema(
  {
    totalPriceUSD: Number,
    isConfirmedByUser: Boolean,
    cart: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
      },
    ],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const TempOrder = mongoose.model('TempOrder', tempOrderSchema);

module.exports = TempOrder;
