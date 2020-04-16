import { AsyncStorage } from "react-native";

export const getItems = async () => {
  try {
    const children = JSON.parse(await AsyncStorage.getItem("children"));
    const userInfo = JSON.parse(await AsyncStorage.getItem("userInfo"));
    return { children, userInfo };
  } catch (error) {
    console.log("GetItemList Error", error);
  }
};

export const setItems = (item) => {
  try {
    AsyncStorage.setItem("userInfo", JSON.stringify(item.userInfo));
    AsyncStorage.setItem("children", JSON.stringify(item.children));
    return true;
  } catch (error) {
    console.log("SetItems Error", error);
    return false;
  }
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    console.log("RemoveItem Error", error);
    return false;
  }
};

export const putData = async () => {
  console.log("putData");

  return true;
};

export const generateId = () => {
  return `f${(~~(Math.random() * 1e8)).toString(16)}`;
};
