
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmbny9mkdhvkmtiv-LKYgC3NcJfjkrsXs",
  authDomain: "cloud-federation-eb7c2.firebaseapp.com",
  projectId: "cloud-federation-eb7c2",
  storageBucket: "cloud-federation-eb7c2.appspot.com",
  messagingSenderId: "669181244137",
  appId: "1:669181244137:web:2739a051c64f560db67678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



  