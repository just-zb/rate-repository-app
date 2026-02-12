import React from 'react';
import ReviewFormContainer from './ReviewFormContainer';
import useCreateReview from '../hooks/useCreateReview';

const ReviewForm = () => {
  const { createReview } = useCreateReview();

  return <ReviewFormContainer onSubmit={createReview} />;
};

export default ReviewForm;
