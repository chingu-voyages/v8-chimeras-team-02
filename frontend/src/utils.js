const AUTH_TOKEN = 'AUTH_TOKEN';

let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }

  token = await localStorage.getItem(AUTH_TOKEN);
  return token;
};

export const setToken = (newToken) => {
  token = newToken;
  return localStorage.setItem(AUTH_TOKEN, newToken);
};

export const resetToken = () => {
  token = undefined;
  return localStorage.removeItem(AUTH_TOKEN);
};
