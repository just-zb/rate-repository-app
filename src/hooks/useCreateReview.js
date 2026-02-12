import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useNavigate } from 'react-router-native';

const useCreateReview = () => {
  const navigate = useNavigate();

  const [mutate] = useMutation(CREATE_REVIEW, {
    onCompleted: (data) => {
      const repositoryId = data.createReview.repositoryId;
      navigate(`/repository/${repositoryId}`);
    },
  });

  const createReview = async (review) => {
    const { ownerName, repositoryName, rating, text } = review;
    await mutate({
      variables: { ownerName, repositoryName, rating, text },
    });
  };

  return { createReview };
};

export default useCreateReview;
