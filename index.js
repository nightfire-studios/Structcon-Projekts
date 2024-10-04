import {gsap} from "gsap";
import {navHover} from '/nav_menus.js'
import {carousel} from '/carousel.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmwGlYzOXmGBBvhQW_W1m7sAAOqIKVOGU",
  authDomain: "structcon-projekts-f4b99.firebaseapp.com",
  projectId: "structcon-projekts-f4b99",
  storageBucket: "structcon-projekts-f4b99.appspot.com",
  messagingSenderId: "985867633038",
  appId: "1:985867633038:web:09e5da0084443eb343e4df",
  measurementId: "G-JPWGX4JLZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



try {
navHover()
carousel()
} catch (error) {
  
}


