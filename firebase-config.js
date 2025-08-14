// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCQI6JG_n2wlqfpku3cNzxoX_PwmnoaZpw",
  authDomain: "smart-hommie-659c2.firebaseapp.com",
  databaseURL: "https://smart-hommie-659c2-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "smart-hommie-659c2",
  storageBucket: "smart-hommie-659c2.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID", // ✅ ใส่ ID ที่ได้จากขั้นตอนก่อนหน้านี้
  appId: "1:431829047042:ios:767d41bf04a59ef892d41b" // ✅ ใส่ App ID ที่ได้จาก Firebase Console
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
