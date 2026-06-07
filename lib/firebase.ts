import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS9zxrhtB9V7-Pe_KPezdQBB_S5cHjYCM",
  authDomain: "kaadu-golla.firebaseapp.com",
  projectId: "kaadu-golla",
  storageBucket: "kaadu-golla.firebasestorage.app",
  messagingSenderId: "1020730665196",
  appId: "1:1020730665196:web:2c895dfffdfc00a930ddc9",
  measurementId: "G-JBSR4NPCWD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Optional
const analytics =
  typeof window !== "undefined"
    ? getAnalytics(app)
    : null;