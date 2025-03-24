// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjMoEKWXlS6L19GszXGYCMHRVuZWXIuk",
  authDomain: "banwatgroups-project.firebaseapp.com",
  projectId: "banwatgroups-project",
  storageBucket: "banwatgroups-project.firebasestorage.app",
  messagingSenderId: "194194903491",
  appId: "1:194194903491:web:916e032960170357986d76",
  measurementId: "G-BV85RKFMN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);


















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB6jp4gV-iJEBXjIq9GNVdhjETBc-RFukw",
//   authDomain: "banwatgroups.firebaseapp.com",
//   projectId: "banwatgroups",
//   storageBucket: "banwatgroups.firebasestorage.app",
//   messagingSenderId: "702971144493",
//   appId: "1:702971144493:web:78538217263647d5becba4",
//   measurementId: "G-1SCECN8GBY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);