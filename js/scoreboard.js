// Load username
let username = localStorage.getItem("currentuser");
document.getElementById("displayName").innerText =
    username ? "Welcome, " + username : "Guest";

// Guess the Number score
document.getElementById("guessScore").innerText =
    localStorage.getItem("guessScore") || 0;

// Memory Game score
document.getElementById("memoryScore").innerText =
    localStorage.getItem("memoryScore") || 0;

// Logic Puzzle score
let logicScore = localStorage.getItem("logicScore");
if (logicScore !== null) {
    document.getElementById("logicScore").innerText = logicScore;
} else {
    let correct = Number(localStorage.getItem("logicCorrect")) || 0;
    let total = Number(localStorage.getItem("logicTotal")) || 0;
    let calculated = total > 0 ? Math.round((correct / total) * 100) : 0;
    document.getElementById("logicScore").innerText = calculated;
}


