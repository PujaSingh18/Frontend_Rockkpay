import AsyncStorage from "@react-native-async-storage/async-storage";

const asyncStorage = {}

asyncStorage.setToken = token =>   AsyncStorage.setItem("AUTH_TOKEN",token); 
asyncStorage.getToken = () => AsyncStorage.getItem("AUTH_TOKEN");
asyncStorage.removeToken = token => AsyncStorage.removeItem("AUTH_TOKEN");
asyncStorage.setName = name =>   AsyncStorage.setItem("USER_NAME",name);
asyncStorage.setMobile = mobile =>   AsyncStorage.setItem("USER_MOBILE",mobile);
asyncStorage.getName = () =>   AsyncStorage.getItem("USER_NAME");
asyncStorage.getMobile = () =>   AsyncStorage.getItem("USER_MOBILE");
asyncStorage.removeName = name => AsyncStorage.removeItem("USER_NAME");
asyncStorage.removeMobile = mobile => AsyncStorage.removeItem("USER_MOBILE");


export { asyncStorage };

