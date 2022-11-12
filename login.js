
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyB8EndVJX4a71SQEfNPDXQb4OHrdvmSjAU",
  authDomain: "stdattendence-34938.firebaseapp.com",
  projectId: "stdattendence-34938",
  storageBucket: "stdattendence-34938.appspot.com",
  messagingSenderId: "1028223791043",
  appId: "1:1028223791043:web:6aa35413285861b34bd776"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let emailL = document.getElementById("emailL");
let passL = document.getElementById("passL");
let login = document.getElementById("login");
login.addEventListener('click',()=>{
    signInWithEmailAndPassword(auth, emailL.value, passL.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    window.location = "admin.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    loginErr.innerHTML = errorMessage;
    console.log(errorMessage)
  });

})