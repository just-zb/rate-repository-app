import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../theme';

const formatCount = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return String(num);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.large,
  },

  topRow: {
    flexDirection: 'row',
    marginBottom: theme.spacing.medium,
  },

  avatar: {
    width: theme.avatar.small,
    height: theme.avatar.small,
    borderRadius: 4,
    marginRight: theme.spacing.large,
  },

  info: {
    flex: 1,
  },

  fullName: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.small,
  },

  description: {
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.small,
  },

  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    borderRadius: 4,
    overflow: 'hidden',
    fontSize: theme.fontSizes.small,
    fontWeight: theme.fontWeights.bold,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: theme.spacing.medium,
  },

  statItem: {
    alignItems: 'center',
  },

  statValue: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textPrimary,
  },

  statLabel: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.small,
  },
});

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image
          source={{ uri: props.imageUrl }}
          style={styles.avatar}
        />

        <View style={styles.info}>
          <Text style={styles.fullName}>{props.fullName}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <Text style={styles.language}>{props.language}</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{formatCount(props.stargazersCount)}</Text>
          <Text style={styles.statLabel}>Stars</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue}>{formatCount(props.forksCount)}</Text>
          <Text style={styles.statLabel}>Forks</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue}>{props.reviewCount}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue}>{props.ratingAverage}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
