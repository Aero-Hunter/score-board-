import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmnITCoebaaqxO3UZf05cqHDbx58bhzp0",

  authDomain: "score-board-40a03.firebaseapp.com",

  projectId: "score-board-40a03",

  storageBucket: "score-board-40a03.appspot.com",

  messagingSenderId: "785738306039",

  appId: "1:785738306039:web:4fc74e5daf41fee23e5ef2",

  measurementId: "G-G62DWSZENY",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth();
