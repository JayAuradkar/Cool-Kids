
const firebaseConfig = {
  apiKey: "AIzaSyDPekIu7hs_z9xujMQPm2QcC1isxvD4Rw",
  authDomain: "projecc-a8fcb.firebaseapp.com",
  databaseURL: "https://projecc-a8fcb-default-rtdb.firebaseio.com",
  projectId: "projecc-a8fcb",
  storageBucket: "projecc-a8fcb.appspot.com",
  messagingSenderId: "623142365263",
  appId: "1:623142365263:web:2fe4df3b758a22ee6a623a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username
username = localStorage.getItem("user")
document.getElementById("span_username").innerHTML = username
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)
       document.getElementById("output").innerHTML += "<div class = 'room_name' id='"+Room_names+"' onclick='redirect(this.id)'>"+Room_names+"</div> <hr>"
      //Start code

      //End code
      });});}
getData();
function logout(){
  localStorage.removeItem("user")
  localStorage.removeItem("cool_kids_key")
  window.location = "index.html"
}
function addition(){
  Room_name = document.getElementById("room_name").value
  firebase.database().ref("/").child(Room_name).update({
    purpose: "adding roomname"
  })
  localStorage.setItem("cool_kids_key",Room_name)
  window.location = "kwitter_page.html"
}
function redirect(name){
  localStorage.setItem("cool_kids_key",name)
  window.location = "kwitter_page.html"
}
