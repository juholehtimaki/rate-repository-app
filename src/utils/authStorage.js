import AsyncStorage from "@react-native-community/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(`${this.namespace}:token`);
    return accessToken ? accessToken : null;
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
  }

  async removeAccessToken() {
    AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
