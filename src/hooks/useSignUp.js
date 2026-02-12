import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import { useSignIn } from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const useSignUp = () => {
  const navigate = useNavigate();
  const { signIn } = useSignIn();

  const [mutate] = useMutation(CREATE_USER, {
    onCompleted: async (data) => {
      // Automatically sign in after successful signup
      await signIn({
        username: data.createUser.username,
        password: values.password, // password from submit values
      });
      navigate('/'); // go to repository list
    },
  });

  const signUp = async (values) => {
    const { username, password } = values;
    await mutate({ variables: { username, password } });
  };

  return { signUp };
};

export default useSignUp;
