import { AsyncStorage, } from 'react-native';

const TOKEN = 'PAY_SEED_TOKEN';
const saveToken = (token) => {
  AsyncStorage.setItem(TOKEN, token);
};

const getToken = () => {
  return AsyncStorage.getItem(TOKEN);
};

module.exports = {
  saveToken,
  getToken,
};
