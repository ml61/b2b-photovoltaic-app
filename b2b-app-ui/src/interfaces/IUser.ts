export type IUser = {
  _id: string;
  companyName: string;
  phoneNumber: string;
  role: 'user' | 'admin' | 'delivery';
  tempOrders: string[];
  confirmedOrders: string[];
  avatar: Buffer;
};
