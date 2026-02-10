import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#24292e',
  },
  tab: {
    marginRight: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tab}>
        <Text color="primary" fontSize="subheading" fontWeight="bold">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;