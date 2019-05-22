import { AsyncStorage } from 'react-native';

export const set = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
      //
    }
};

export const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error) {
      // 
    }
};