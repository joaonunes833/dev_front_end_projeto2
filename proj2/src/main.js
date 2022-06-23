import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vue_axios from "vue-axios"
import firebase from "firebase"

// FIREBASE ///////////////////////////
const firebaseConfig = {
  apiKey: "AIzaSyAi2LW5WGeZfv-9286ysaZ1TfLwhAXboW8",
  authDomain: "front-end-3e529.firebaseapp.com",
  databaseURL: "https://front-end-3e529-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "front-end-3e529",
  storageBucket: "front-end-3e529.appspot.com",
  messagingSenderId: "51097043322",
  appId: "1:51097043322:web:0892106da66d456cb716c3"
};
firebase.initializeApp(firebaseConfig);
//////////////////////////////////////


createApp(App).use(vue_axios, axios).use(router).mount('#app')

