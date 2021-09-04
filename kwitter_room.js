
const firebaseConfig = {
      apiKey: "AIzaSyDR1-fqNX-bXhfvpodL9gFV8EJyjLMl5Tg",
      authDomain: "cool-98082.firebaseapp.com",
      databaseURL: "https://cool-98082-default-rtdb.firebaseio.com",
      projectId: "cool-98082",
      storageBucket: "cool-98082.appspot.com",
      messagingSenderId: "443311747652",
      appId: "1:443311747652:web:2966b1b7dd3ca0c479c211"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
