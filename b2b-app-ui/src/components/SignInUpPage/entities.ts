import { SubmitHandler, FieldValues } from 'react-hook-form';

export type SignInUpType = {
  password: string;
  companyName: string;
  phoneNumber: string;
};

export interface ISignInUpForm {
  handleSubmit: SubmitHandler<SignInUpType>;
  isFormSubmitting: boolean;
  errorMessage: string;
  isSignInMode: boolean;
  setIsSignInMode: React.Dispatch<React.SetStateAction<boolean>>;
}
