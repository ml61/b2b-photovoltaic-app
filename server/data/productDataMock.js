const modulesMockedDummyData = [
  {
    manufacturer: 'Amerisolar',
    powerWatts: 290,
    moduleType: 'poly',
  },

  {
    manufacturer: 'Amerisolar',
    powerWatts: 305,
    moduleType: 'poly',
  },
  {
    manufacturer: 'Amerisolar',
    powerWatts: 310,
    moduleType: 'mono',
  },
  {
    manufacturer: 'Amerisolar',
    powerWatts: 320,
    moduleType: 'mono',
  },
  {
    manufacturer: 'Canadian Solar',
    powerWatts: 300,
    moduleType: 'poly',
  },

  {
    manufacturer: 'Canadian Solar',
    powerWatts: 310,
    moduleType: 'poly',
  },
  {
    manufacturer: 'Canadian Solar',
    powerWatts: 340,
    moduleType: 'mono',
  },
  {
    manufacturer: 'Q-Cell Hanwha',
    powerWatts: 360,
    moduleType: 'mono',
  },
];

const invertersMockedDummyData = [
  {
    manufacturer: 'Huawei',
    powerKiloWatts: 10,
    inverterType: 'onGrid',
  },
  {
    manufacturer: 'Huawei',
    powerKiloWatts: 15,
    inverterType: 'onGrid',
  },
  {
    manufacturer: 'Huawei',
    powerKiloWatts: 20,
    inverterType: 'onGrid',
  },
  {
    manufacturer: 'Fronius',
    powerKiloWatts: 15,
    inverterType: 'onGrid',
  },
  {
    manufacturer: 'Fronius',
    powerKiloWatts: 25,
    inverterType: 'onGrid',
  },
  {
    manufacturer: 'Huawei',
    powerKiloWatts: 5,
    inverterType: 'offGrid',
  },
  {
    manufacturer: 'Huawei',
    powerKiloWatts: 10,
    inverterType: 'offGrid',
  },
  {
    manufacturer: 'Fronius',
    powerKiloWatts: 5,
    inverterType: 'offGrid',
  },
  {
    manufacturer: 'Fronius',
    powerKiloWatts: 12,
    inverterType: 'offGrid',
  },
  {
    manufacturer: 'SolarEdge',
    powerKiloWatts: 17,
    inverterType: 'offGrid',
  },
];

const mountingSystemMockedDummyData = [
  {
    manufacturer: 'SolarSteelConstruction',
    mountingType: 'roof',
    roofType: 'flat',
  },
  {
    manufacturer: 'SolarSteelConstruction',
    mountingType: 'ground',
  },
  {
    manufacturer: 'K2-systems',
    mountingType: 'roof',
    roofType: 'flat',
  },
  {
    manufacturer: 'K2-systems',
    mountingType: 'ground',
  },
  {
    manufacturer: 'K2-systems',
    mountingType: 'roof',
    roofType: 'classic',
  },
  {
    manufacturer: 'Corab',
    mountingType: 'ground',
  },
  {
    manufacturer: 'Corab',
    mountingType: 'roof',
    roofType: 'classic',
  },
];
const protectionBoxAcDcMockedDummyData = [
  {
    manufacturer: 'Schneider',
    powerOfSystemKiloWatts: 5,
  },
  {
    manufacturer: 'Schneider',
    powerOfSystemKiloWatts: 10,
  },
  {
    manufacturer: 'Schneider',
    powerOfSystemKiloWatts: 20,
  },
  {
    manufacturer: 'IEK',
    powerOfSystemKiloWatts: 30,
  },
  {
    manufacturer: 'ETITEC',
    powerOfSystemKiloWatts: 30,
  },
  {
    manufacturer: 'ETITEC',
    powerOfSystemKiloWatts: 40,
  },
];

const modulesData = modulesMockedDummyData.map(
  ({ manufacturer, moduleType, powerWatts }, idx) => {
    return {
      productName: `${manufacturer} ${powerWatts}W ${moduleType}`,
      category: 'solarModule',
      manufacturer,
      pricePerUnitStandardUSD: 106 + idx * 4,
      pricePerUnitPremiumUSD: 102 + idx * 4,
      totalStockQuantity: 500 + idx * 20,
      inPricesAndQuantities: [
        {
          priceInUSD: 100 + idx * 3,
          quantity: 300,
        },
        {
          priceInUSD: 101.5 + idx * 3,
          quantity: 200 + idx * 20,
        },
      ],
      description: `Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. `,
      totalSoldItems: 0,
      totalProductPriceSoldUSD: 0,
      totalProductPriceInSoldUSD: 0,
      isProductArchived: false,
      specificProductInfo: {
        module: {
          moduleType,
          powerWatts,
        },
      },
    };
  }
);
const invertersData = invertersMockedDummyData.map(
  ({ manufacturer, inverterType, powerKiloWatts }, idx) => {
    return {
      productName: `${manufacturer} ${powerKiloWatts} kW ${inverterType}`,
      category: 'inverter',
      manufacturer,
      pricePerUnitStandardUSD: 1500 + idx * 100,
      pricePerUnitPremiumUSD: 1450 + idx * 100,
      totalStockQuantity: 3 + idx,
      inPricesAndQuantities: [
        {
          priceInUSD: 1400 + idx * 85,
          quantity: 2,
        },
        {
          priceInUSD: 1380 + idx * 85,
          quantity: 1 + idx,
        },
      ],
      description: `Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. `,
      totalSoldItems: 0,
      totalProductPriceSoldUSD: 0,
      totalProductPriceInSoldUSD: 0,
      isProductArchived: false,
      specificProductInfo: {
        inverter: {
          inverterType,
          powerKiloWatts,
        },
      },
    };
  }
);

const mountingSystemData = mountingSystemMockedDummyData.map(
  ({ manufacturer, mountingType, roofType }, idx) => {
    return {
      productName: `${manufacturer} - ${mountingType} - ${
        roofType || 'construction'
      }`,
      category: 'mountingSystem',
      manufacturer,
      pricePerUnitStandardUSD: 15 + idx / 2,
      pricePerUnitPremiumUSD: 14 + idx / 2,
      totalStockQuantity: 400 + idx * 20,
      inPricesAndQuantities: [
        {
          priceInUSD: 100 + idx * 3,
          quantity: 200,
        },
        {
          priceInUSD: 101.5 + idx * 3,
          quantity: 200 + idx * 20,
        },
      ],
      description: `Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. `,
      totalSoldItems: 0,
      totalProductPriceSoldUSD: 0,
      totalProductPriceInSoldUSD: 0,
      isProductArchived: false,
      specificProductInfo: {
        mountingSystem: {
          mountingType,
          roofType,
        },
      },
    };
  }
);
const protectionBoxAcDcData = protectionBoxAcDcMockedDummyData.map(
  ({ manufacturer, powerOfSystemKiloWatts }, idx) => {
    return {
      productName: `${manufacturer} - ${powerOfSystemKiloWatts}`,
      category: 'protectionBoxAcDc',
      manufacturer,
      pricePerUnitStandardUSD: 1000 + idx * 30,
      pricePerUnitPremiumUSD: 950 + idx * 30,
      totalStockQuantity: 4 + idx,
      inPricesAndQuantities: [
        {
          priceInUSD: 500 + idx * 3,
          quantity: 4 + idx,
        },
      ],
      description: `Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. `,
      totalSoldItems: 0,
      totalProductPriceSoldUSD: 0,
      totalProductPriceInSoldUSD: 0,
      isProductArchived: false,
      specificProductInfo: {
        protectionBoxAcDc: {
          powerOfSystemKiloWatts,
        },
      },
    };
  }
);

export const productDataMock = [
  ...modulesData,
  ...invertersData,
  ...mountingSystemData,
  ...protectionBoxAcDcData,
];

// const invertersData
