var username = "";
function shift(){
    username = document.getElementById("user_name").value
    localStorage.setItem("user",username)
    window.location = ("kwitter_room.html")
}