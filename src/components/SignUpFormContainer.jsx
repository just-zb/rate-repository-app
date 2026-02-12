import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.large,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    padding: theme.spacing.small,
    marginBottom: theme.spacing.medium,
    borderRadius: 4,
  },
  errorText: {
    color: theme.colors.error,
    marginBottom: theme.spacing.medium,
  },
});

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username must be at most 30 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be at most 50 characters'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

const SignUpFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({
          username: values.username,
          password: values.password,
        });
        resetForm();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Username"
            style={styles.input}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
          />
          {touched.username && errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}

          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry
            onChangeText={handleChange('passwordConfirm')}
            onBlur={handleBlur('passwordConfirm')}
            value={values.passwordConfirm}
          />
          {touched.passwordConfirm && errors.passwordConfirm && (
            <Text style={styles.errorText}>{errors.passwordConfirm}</Text>
          )}

          <Button onPress={handleSubmit} title="Sign Up" />
        </View>
      )}
    </Formik>
  );
};

export default SignUpFormContainer;
