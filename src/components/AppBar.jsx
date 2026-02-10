import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#24292e',
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    marginRight: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContent}
        showsHorizontalScrollIndicator={false}
      >
        <Link to="/" style={styles.tab}>
          <Text color="primary" fontSize="subheading" fontWeight="bold">
            Repositories
          </Text>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <Text color="primary" fontSize="subheading" fontWeight="bold">
            Sign in
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;