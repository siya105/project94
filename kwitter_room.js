
var firebaseConfig = {
      apiKey: "AIzaSyCcLN3ek_MaKOfkhCd1gGdWLQcjcEb8ueY",
      authDomain: "kwitter-1353d.firebaseapp.com",
      databaseURL: "https://kwitter-1353d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1353d",
      storageBucket: "kwitter-1353d.appspot.com",
      messagingSenderId: "332827048997",
      appId: "1:332827048997:web:d2c178d36d11b0eab253cc",
      measurementId: "G-7BWGBM278L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
