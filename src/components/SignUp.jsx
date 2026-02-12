import React from 'react';
import SignUpFormContainer from './SignUpFormContainer';
import useSignUp from '../hooks/useSignUp';

const SignUp = () => {
  const { signUp } = useSignUp();

  return <SignUpFormContainer onSubmit={signUp} />;
};

export default SignUp;
