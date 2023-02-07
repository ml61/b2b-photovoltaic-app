import { error } from 'console';
import React, { useEffect } from 'react';
import { HandleSignInUpFormChange } from '../components/SignInUpPage/entities';
import { SignInUpForm } from '../components/SignInUpPage/SignInUpForm';
import { RequestError } from '../interfaces/globalInterfaces';
import { apiSlice } from '../store/api/apiSlice';

const SignInUp = () => {
  const [isSignInMode, setIsSignInMode] = React.useState(true);
  const [form, setForm] = React.useState({
    phoneNumber: '+380',
    password: '',
    companyName: '',
  });
  const [signIn, { isLoading: isSignInLoading, error: signInErr }] =
    apiSlice.useSignInMutation();
  const [signUp, { isLoading: isSignUpLoading, error: signUpErr }] =
    apiSlice.useSignUpMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSignInMode) {
      return signIn({ password: form.password, phoneNumber: form.phoneNumber });
    }
    signUp({
      password: form.password,
      phoneNumber: form.phoneNumber,
      companyName: form.companyName,
    });
  };

  const handleFormChange: HandleSignInUpFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };
  useEffect(() => {
    console.log(signInErr, 'signInErr');
  }, [signInErr]);

  return (
    <SignInUpForm
      form={form}
      handleSubmit={handleSubmit}
      isFormSubmitting={isSignInLoading || isSignUpLoading}
      errorMessage={''}
      handleChange={handleFormChange}
      isSignInMode={isSignInMode}
      setIsSignInMode={setIsSignInMode}
    />
  );
};

export default SignInUp;
