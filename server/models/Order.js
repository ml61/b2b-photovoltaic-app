import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    totalPriceUSD: Number,
    totalPriceInUSD: Number,

    isPaid: Boolean,
    isSent: Boolean,
    totalStockQuantity: Number,
    cartWithInPrices: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        productInPricesAndOrderedQuantities: [
          {
            priceInUSD: {
              type: Number,
              required: true,
            },
            quantity: {
              type: Number,
              required: true,
            },
          },
        ],
      },
    ],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model('Order', orderSchema);
