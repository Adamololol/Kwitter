var firebaseConfig = {
apiKey: "AIzaSyCGTRgShpIldv4aBjpyeGedqiC58jKn6vg",
authDomain: "susybaka-18d66.firebaseapp.com",
databaseURL: "https://susybaka-18d66-default-rtdb.firebaseio.com"
projectId: "susybaka-18d66",
    storageBucket: "susybaka-18d66.appspot.com",
    messagingSenderId: "1008669488923",
    appId: "1:1008669488923:web:e100c2fd0cdd4bfefa05be",
    measurementId: "G-SYKDC5ZCTR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
