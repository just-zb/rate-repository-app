import React, { useState } from 'react';
import { FlatList, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDebounce } from 'use-debounce';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const RepositoryListContainer = () => {
  // --- Sorting state ---
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');

  // --- Filtering / search state ---
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedSearch] = useDebounce(searchKeyword, 500); // wait 500ms

  // --- Fetch repositories ---
  const { repositories } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword: debouncedSearch, // pass the debounced value
  });

  const repositoryNodes = repositories?.edges.map(edge => edge.node) ?? [];

  // --- Header component with search + sort ---
  const renderHeader = () => (
    <View>
      <TextInput
        placeholder="Search repositories"
        value={searchKeyword}
        onChangeText={setSearchKeyword} // updates local state immediately
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          margin: 10,
        }}
      />

      <Picker
        selectedValue={orderBy + orderDirection}
        onValueChange={(value) => {
          if (value === 'CREATED_ATDESC') {
            setOrderBy('CREATED_AT');
            setOrderDirection('DESC');
          } else if (value === 'RATING_AVERAGEDESC') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('DESC');
          } else if (value === 'RATING_AVERAGEASC') {
            setOrderBy('RATING_AVERAGE');
            setOrderDirection('ASC');
          }
        }}
      >
        <Picker.Item label="Latest repositories" value="CREATED_ATDESC" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGEDESC" />
        <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGEASC" />
      </Picker>
    </View>
  );

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RepositoryItem {...item} testID="repositoryItem" />}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default RepositoryListContainer;
