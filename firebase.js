import * as FirebaseCore from "expo-firebase-core";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZoM9iLRwwK-baheTnLBF2EDad_jOfzaA",
  authDomain: "auctionapp-4234b.firebaseapp.com",
  databaseURL: "https://auctionapp-4234b.firebaseio.com",
  projectId: "auctionapp-4234b",
  storageBucket: "auctionapp-4234b.appspot.com",
  messagingSenderId: "75323784420",
  appId: "1:75323784420:web:e9a48fd4d058d982c700f1",
  measurementId: "G-CX64C0F614",
};
FirebaseCore.initializeApp(firebaseConfig);

export default FirebaseCore;
