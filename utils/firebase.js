import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const apiKey = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;
const appId = process.env.EXPO_PUBLIC_FB_APP_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "na-we-b6653.firebaseapp.com",
  projectId: "na-we-b6653",
  storageBucket: "na-we-b6653.appspot.com",
  messagingSenderId: "147056844033",
  appId: appId,
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const FIREBASE_AUTH = getAuth(app);
const storage = getStorage(app);

export { app, auth, FIREBASE_AUTH, storage };
