import { View, Text } from 'react-native';

const RepositoryItem = ({ item }) => {
  const {
    ownerAvatarUrl,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
  } = item;

  return (
    <View>
      <View>
        <View>
          <Text>Full Name: {fullName}</Text>
          <Text numberOfLines={2}>Description: {description}</Text>
          {language && (
            <View>
              <Text>Language: {language}</Text>
            </View>
          )}
        </View>
      </View>

      <View>
        <View>
          <Text>Stars: {stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text>Forks: {forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text>Reviews: {reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text>Rating: {ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;