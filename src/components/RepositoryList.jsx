import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useState, useEffect } from 'react';
const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8',
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories} = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <RepositoryItem 
          imageUrl={item.ownerAvatarUrl}
          fullName={item.fullName} 
          description={item.description} 
          language={item.language} 
          forksCount={item.forksCount} 
          stargazersCount={item.stargazersCount} 
          reviewCount={item.reviewCount} 
          ratingAverage={item.ratingAverage}/>
      )}
    />
  );
};

export default RepositoryList;