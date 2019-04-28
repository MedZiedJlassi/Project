 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDXAwKDRF--qOh11EroYfMj0aBmTf9XBHI",
    authDomain: "mongarage-3396d.firebaseapp.com",
    databaseURL: "https://mongarage-3396d.firebaseio.com",
    projectId: "mongarage-3396d",
    storageBucket: "mongarage-3396d.appspot.com",
    messagingSenderId: "774846865127"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const  database = firebase.database();