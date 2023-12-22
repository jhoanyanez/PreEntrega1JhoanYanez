import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

/*const firebaseConfig = {
  apiKey: "AIzaSyBbLXIqT224VjuZVBo9jZ-dSDx_r6jwl18",
  authDomain: "ecommerce-c8600.firebaseapp.com",
  projectId: "ecommerce-c8600",
  storageBucket: "ecommerce-c8600.appspot.com",
  messagingSenderId: "444762117605",
  appId: "1:444762117605:web:48320bf86b2fdd1571cb0c"
};
*/

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);