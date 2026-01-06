function saveUser(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(pass !== confirm){
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Sign up successful! Please log in.");
    window.location.href = "login.html";
}
