import React from 'react';
import { FlatList, View, Button, ScrollView, StyleSheet, Text } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery, gql } from '@apollo/client';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import { format } from 'date-fns';

const REPOSITORY_QUERY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
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
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8',
  },
  buttonContainer: {
    margin: 20,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryView = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(REPOSITORY_QUERY, {
    variables: { id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const repository = data.repository;
  const reviews = repository.reviews.edges.map(edge => edge.node);

  const handleOpenGitHub = () => {
    Linking.openURL(repository.url);
  };

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem
            fullName={repository.fullName}
            description={repository.description}
            language={repository.language}
            forksCount={repository.forksCount}
            stargazersCount={repository.stargazersCount}
            reviewCount={repository.reviewCount}
            ratingAverage={repository.ratingAverage}
            imageUrl={repository.ownerAvatarUrl}
          />
          <View style={styles.buttonContainer}>
            <Button title="Open in GitHub" onPress={handleOpenGitHub} />
          </View>
        </>
      )}
    />
  );
};

export default RepositoryView;
