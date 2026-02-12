import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
  ownerName: Yup.string().required("Repository owner's username is required"),
  repositoryName: Yup.string().required("Repository name is required"),
  rating: Yup.number()
    .required('Rating is required')
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating cannot be more than 100'),
  text: Yup.string(),
});

const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        ownerName: '',
        repositoryName: '',
        rating: '',
        text: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({
          ...values,
          rating: parseInt(values.rating, 10),
        });
        resetForm();
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Repository owner's username"
            style={styles.input}
            onChangeText={handleChange('ownerName')}
            onBlur={handleBlur('ownerName')}
            value={values.ownerName}
          />
          {touched.ownerName && errors.ownerName && (
            <Text style={styles.errorText}>{errors.ownerName}</Text>
          )}

          <TextInput
            placeholder="Repository name"
            style={styles.input}
            onChangeText={handleChange('repositoryName')}
            onBlur={handleBlur('repositoryName')}
            value={values.repositoryName}
          />
          {touched.repositoryName && errors.repositoryName && (
            <Text style={styles.errorText}>{errors.repositoryName}</Text>
          )}

          <TextInput
            placeholder="Rating (0-100)"
            style={styles.input}
            onChangeText={handleChange('rating')}
            onBlur={handleBlur('rating')}
            value={values.rating}
            keyboardType="numeric"
          />
          {touched.rating && errors.rating && (
            <Text style={styles.errorText}>{errors.rating}</Text>
          )}

          <TextInput
            placeholder="Review"
            style={[styles.input, { height: 100 }]}
            onChangeText={handleChange('text')}
            onBlur={handleBlur('text')}
            value={values.text}
            multiline
          />
          {touched.text && errors.text && (
            <Text style={styles.errorText}>{errors.text}</Text>
          )}

          <Button onPress={handleSubmit} title="Create a review" />
        </View>
      )}
    </Formik>
  );
};

export default ReviewFormContainer;
