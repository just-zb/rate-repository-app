import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.white,
  },
  ratingCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.medium,
  },
  ratingText: {
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
  },
  info: {
    flex: 1,
  },
  username: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    marginBottom: theme.spacing.small,
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.small,
  },
  text: {
    color: theme.colors.textPrimary,
  },
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.ratingCircle}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
