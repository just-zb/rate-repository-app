import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <TextInput
            testID="usernameField"
            value={values.username}
            onChangeText={handleChange('username')}
          />
          <TextInput
            testID="passwordField"
            value={values.password}
            secureTextEntry
            onChangeText={handleChange('password')}
          />
          <Button testID="submitButton" title="Sign in" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default SignInContainer;
