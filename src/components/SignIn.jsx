import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-native';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.mainBackground,
  },

  card: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.large,  
  },

  input: {
    borderWidth: 1,
    borderColor: '#d0d7de',
    borderRadius: 5,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    fontSize: theme.fontSizes.body,
  },

  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: theme.spacing.medium,
  },

  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },

  inputError: {
    borderColor: theme.colors.error,
  },
  
});


const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

    return (
      <View style={styles.screen}>
        <View style={styles.card}>
          <TextInput
            style={[styles.input, formik.touched.username && formik.errors.username ? styles.inputError : null]}
            onChangeText={formik.handleChange('username')}
            value={formik.values.username}
            placeholder="Username"
          />
          {formik.touched.username && formik.errors.username ? (
            <Text style={{ color: 'red', marginBottom: theme.spacing.small }}>
              {formik.errors.username}
            </Text>
          ) : null}

          <TextInput
            style={[styles.input, formik.touched.password && formik.errors.password ? styles.inputError : null]}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            placeholder="Password"
            secureTextEntry
          />
          {formik.touched.password && formik.errors.password ? (
            <Text style={{ color: 'red', marginBottom: theme.spacing.small }}>
              {formik.errors.password}
            </Text>
          ) : null}

          <Pressable onPress={formik.handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    );
};

export default SignIn;
