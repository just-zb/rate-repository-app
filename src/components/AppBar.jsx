import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
  },
  scroll: {
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  text: {
    color: theme.colors.tabText,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

const AppBar = () => {
  const { data } = useQuery(ME);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const isLoggedIn = Boolean(data?.me);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        <Link to="/" component={Pressable} style={styles.tab}>
          <Text style={styles.text}>Repositories</Text>
        </Link>

        {isLoggedIn ? (
          <Pressable onPress={signOut} style={styles.tab}>
            <Text style={styles.text}>Sign Out</Text>
          </Pressable>
        ) : (
          <Link to="/signin" component={Pressable} style={styles.tab}>
            <Text style={styles.text}>Sign In</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
