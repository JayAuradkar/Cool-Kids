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

var username = localStorage.getItem("user")
var roomname = localStorage.getItem("cool_kids_key")

function Back(){
 window.location = "kwitter_room.html"
}

function Send(){
      msg = document.getElementById("inpot").value
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      }) 
      document.getElementById("inpot").value = ""
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData
name_message = message_data["name"]
message = message_data["message"]
like_message = message_data["like"]
namewithtag = "<h3>"+ name_message +"</h3>"
messagewithtag = "<h3>"+ message +"</h3>"
buttonwithtag = "<button id="+firebase_message_id+" class='btn btn-warning' onclick='update(this.id)' value= "+ like_message +">Like: "+like_message+"</button>"
document.getElementById("output").innerHTML += namewithtag + messagewithtag + buttonwithtag
} });  }); }
getData();
function update(message_id){
   button_id = message_id
   likes = document.getElementById(button_id).value
   updatedlikes = Number(likes)+1
   firebase.database().ref(roomname).child(message_id).update({
       like:updatedlikes  
   })
}