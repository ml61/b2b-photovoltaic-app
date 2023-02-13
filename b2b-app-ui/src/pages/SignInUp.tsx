import React, { useEffect } from 'react';
import { SignInUpType } from '../components/SignInUpPage/entities';
import { SignInUpForm } from '../components/SignInUpPage/SignInUpForm';
import { RequestErrorFormatted } from '../interfaces/globalInterfaces';
import { apiSlice } from '../store/api/apiSlice';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

const SignInUp = () => {
  const [isSignInMode, setIsSignInMode] = React.useState(true);

  const methods = useForm<SignInUpType>({
    defaultValues: { phoneNumber: '+380', password: '', companyName: '' },
  });

  const [signIn, { isLoading: isSignInLoading, error: signInErr }] =
    apiSlice.useSignInMutation();
  const [signUp, { isLoading: isSignUpLoading, error: signUpErr }] =
    apiSlice.useSignUpMutation();

  const handleSubmit: SubmitHandler<SignInUpType> = (data) => {
    if (isSignInMode) {
      return signIn({ password: data.password, phoneNumber: data.phoneNumber });
    }
    signUp({
      password: data.password,
      phoneNumber: data.phoneNumber,
      companyName: data.companyName,
    });
  };

  const errMsg = isSignInMode
    ? (signInErr as RequestErrorFormatted)?.message
    : (signUpErr as RequestErrorFormatted)?.message;

  return (
    <FormProvider {...methods}>
      <SignInUpForm
        handleSubmit={handleSubmit}
        isFormSubmitting={isSignInLoading || isSignUpLoading}
        errorMessage={errMsg}
        isSignInMode={isSignInMode}
        setIsSignInMode={setIsSignInMode}
      />
    </FormProvider>
  );
};

export default SignInUp;
