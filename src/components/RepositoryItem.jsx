import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ffffff',
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  fullName: {
    marginBottom: 4,
  },
  description: {
    marginBottom: 8,
  },
  languageTag: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  languageText: {
    color: '#ffffff',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    marginBottom: 2,
  },
});

const formatCount = (value) => {
  if (value < 1000) {
    return value;
  }

  const formatted = (value / 1000).toFixed(1);
  const trimmed = formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted;

  return `${trimmed}k`;
};

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
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />

        <View style={styles.info}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.fullName}>
            {fullName}
          </Text>
          <Text color="textSecondary" style={styles.description}>
            {description}
          </Text>
          {language && (
            <View style={styles.languageTag}>
              <Text style={styles.languageText}>{language}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text fontWeight="bold" style={styles.statValue}>
            {formatCount(stargazersCount)}
          </Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold" style={styles.statValue}>
            {formatCount(forksCount)}
          </Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold" style={styles.statValue}>
            {formatCount(reviewCount)}
          </Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text fontWeight="bold" style={styles.statValue}>
            {formatCount(ratingAverage)}
          </Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;