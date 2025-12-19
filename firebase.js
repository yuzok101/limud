// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJxjBdZ8sGwdjlVmaIg4-3XfV_H4-e7yM",
  authDomain: "my-site-dashboard.firebaseapp.com",
  projectId: "my-site-dashboard",
  storageBucket: "my-site-dashboard.firebasestorage.app",
  messagingSenderId: "533033876760",
  appId: "1:533033876760:web:2e344026cd594d2dd4326d",
  measurementId: "G-HFTJSMB7XX"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
