import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalStoreData = async (objKey: string, value: unknown) => {
    try {
        if (!objKey) {
            return { status: false };
        }
        const jsonValue = JSON.stringify(value);
        return await AsyncStorage.setItem(objKey, jsonValue);
    } catch (error) {
        return { status: false, error };
    }
};
export const removeLocalStoreData = async (objKey: string) => {
    try {
        if (!objKey) {
            return { status: false };
        }
        return AsyncStorage.removeItem(objKey);
    } catch (error) {
        return { status: false, error };
    }
};

export const getLocalStoreData = async (objKey: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(objKey);
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
        return error;
        // error reading value
    }
};

export default { setLocalStoreData, getLocalStoreData, removeLocalStoreData };
