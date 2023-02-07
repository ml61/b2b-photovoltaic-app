import { IUser } from '../IUser';

export type ISignUpInput = {
  password: string;
  phoneNumber: string;
  companyName: string;
};
export type ISignUpOutput = { user: IUser; token: string };
