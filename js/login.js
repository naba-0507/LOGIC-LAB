function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

   
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(username === "" || password === ""){
        msg.style.color = "#FFD27C";
        msg.innerText = "⚠ Please fill all fields";
        return;
    }

    if(username === savedUser && password === savedPass){
        localStorage.setItem("loggedUser", username);
        msg.style.color = "#7CFF7C";
        msg.innerText = "✅ Login successful!";

        setTimeout(() => {
            window.location.href = "./dashboard.html";
        }, 800);
    } 
    else {
        msg.style.color = "#FF7C7C";
        msg.innerText = "❌ Incorrect username or password";
    }
}



