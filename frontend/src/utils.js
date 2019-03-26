/*import { AsyncStorage } from 'reac';

const AUTH_TOKEN = 'AUTH_TOKEN';

let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }

  token = await AsyncStorage.getItem(AUTH_TOKEN);
  return token;
};

export const setToken = (newToken) => {
  token = newToken;
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const resetToken = () => {
  token = undefined;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};
*/