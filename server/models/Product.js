import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
      // uppercase: true,
    },
    category: {
      type: String,
      enum: ['solarModule', 'inverter', 'mountingSystem', 'protectionBoxAcDc'],
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
      trim: true,
    },
    productImage: {
      type: Buffer,
    },
    pricePerUnitStandardUSD: Number,
    pricePerUnitPremiumUSD: Number,
    totalStockQuantity: Number,
    inPricesAndQuantities: [
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
    description: String,
    totalSoldItems: Number,
    totalProductPriceSoldUSD: Number,
    totalProductPriceInSoldUSD: Number,
    isProductArchived: Boolean,
    specificProductInfo: {
      module: {
        moduleType: {
          type: String,
          enum: ['mono', 'poly'],
          // required: true,
        },
        powerWatts: {
          type: Number,
          // required: true
        },
      },
      inverter: {
        inverterType: {
          type: String,
          enum: ['onGrid', 'offGrid'],
          // required: true,
        },
        powerKiloWatts: {
          type: Number,
          // required: true
        },
      },
      protectionBoxAcDc: {
        powerOfSystemKiloWatts: {
          type: Number,
          // required: true
        },
      },
      mountingSystem: {
        mountingType: {
          type: String,
          enum: ['roof', 'ground'],
          // required: true,
        },
        roofType: {
          type: String,
          enum: ['classic', 'flat'],
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model('Product', productSchema);
