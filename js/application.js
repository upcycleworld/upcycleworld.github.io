  // Firebase App is always required and must be first
var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");
require("firebase/database");

// Comment out (or don't require) services that you don't want to use
// require("firebase/storage");
firebase.initializeApp(config);// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCe2pvhR-B-VvVJwE3ufx2Jj5uevMnQpEw",
    authDomain: "smart-table-fd493.firebaseapp.com",
    databaseURL: "https://smart-table-fd493.firebaseio.com",
    projectId: "smart-table-fd493",
    storageBucket: "smart-table-fd493.appspot.com",
    messagingSenderId: "651777956215"
  };
  firebase.initializeApp(config);

function writeData() {
  var x = document.getElementById("frm1");
  var i;
  for (i = 0; i < x.length ;i++) {
    firebase.database().ref('hue').set(x.elements[i].value);
        then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
  }
}
