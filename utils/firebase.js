import { initializeApp } from "@react-native-firebase/app";
import { getStorage } from "@react-native-firebase/storage";
import { getAuth } from "@react-native-firebase/auth";

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
export const storage = getStorage(app);
export const auth = getAuth(app);
