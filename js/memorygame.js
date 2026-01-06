// Simple emoji pairs
let emojis = ["🍎","🍌","🍇","🍒","🍎","🍌","🍇","🍒"];

// Shuffle emojis
emojis.sort(() => Math.random() - 0.5);

let grid = document.getElementById("grid");
let first = null;
let second = null;
let lock = false;
let moves = 0;
let matchedCount = 0;

// Create cards
emojis.forEach((emoji, i) => {
    let btn = document.createElement("button");
    btn.classList.add("btn-card");
    btn.dataset.emoji = emoji;
    btn.dataset.index = i;
    btn.innerHTML = "";
    btn.addEventListener("click", () => reveal(btn));
    grid.appendChild(btn);
});

function reveal(card){
    if (lock || card.classList.contains("revealed") || card.classList.contains("matched")) return;

    card.classList.add("revealed");
    card.innerHTML = card.dataset.emoji;

    if (!first) {
        first = card;
        return;
    }

    second = card;
    moves++;
    document.getElementById("moves").innerText = "Moves: " + moves;
    lock = true;

    setTimeout(check, 600);
}

function check(){
    if (first.dataset.emoji === second.dataset.emoji) {
        first.classList.add("matched");
        second.classList.add("matched");
        matchedCount += 2;

        if (matchedCount === emojis.length) {
            let finalScore = Math.max(100 - moves * 10, 10);
            localStorage.setItem("memoryScore", finalScore);
            alert("You won! Score saved: " + finalScore);
        }
    } else {
        first.classList.remove("revealed");
        second.classList.remove("revealed");
        first.innerHTML = "";
        second.innerHTML = "";
    }

    first = null;
    second = null;
    lock = false;
}
