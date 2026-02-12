import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import ReviewItem from './ReviewItem'; // reusable review component from Exercise 10.20
import { ItemSeparator } from './RepositoryList'; // reusable separator

// --- Query to fetch the current user and their reviews ---
const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = true) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repository {
              id
              fullName
            }
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
});

const MyReviews = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching reviews</Text>;

  const reviews = data?.me?.reviews?.edges.map(edge => edge.node) ?? [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Reviews</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default MyReviews;
