import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken() {
    const token = AsyncStorage.getItem(`${this.namespace}:accessToken`);
    return token;
  }

  setAccessToken(accessToken) {
    const token = AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
    return token;
  }

  removeAccessToken() {
    const token = AsyncStorage.removeItem(`${this.namespace}:accessToken`);
    return token;
  }
}

export default AuthStorage;