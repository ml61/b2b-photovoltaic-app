import { IUser } from '../IUser';

export type ISignInInput = {
  password: string;
  phoneNumber: string;
};
export type ISignInOutput = { user: IUser; token: string };
