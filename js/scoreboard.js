// Get current logged in username
let username = localStorage.getItem("currentUser") || "Guest";

// Score generated based on number of attempts or random fallback
let score = localStorage.getItem("userScore") || Math.floor(Math.random() * 100);

// Display on scoreboard
document.getElementById("currentUser").innerText = username;
document.getElementById("currentScore").innerText = score;
