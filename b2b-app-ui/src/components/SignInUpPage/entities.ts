export type HandleSignInUpFormChange = (
  field: 'password' | 'companyName' | 'phoneNumber',
  value: string
) => void;

export interface ISignInUpForm {
  form: { password: string; companyName: string; phoneNumber: string };
  handleChange: HandleSignInUpFormChange;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isFormSubmitting: boolean;
  errorMessage: string;
  isSignInMode: boolean;
  setIsSignInMode: React.Dispatch<React.SetStateAction<boolean>>;
}
