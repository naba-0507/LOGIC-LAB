let user = localStorage.getItem("username");

if(user){
    document.getElementById("welcome").innerText =
        "Welcome, " + user + " 👋";
}
