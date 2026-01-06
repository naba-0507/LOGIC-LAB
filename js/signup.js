function signup(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if(username === "" || password === ""){
        msg.style.color = "#FFD27C";
        msg.innerText = "⚠ Please fill all fields";
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    msg.style.color = "#7CFF7C";
    msg.innerText = "✅ Account created successfully!";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 900);
}
