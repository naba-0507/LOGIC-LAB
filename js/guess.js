let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess(){
    let guess = Number(document.getElementById("guessInput").value);
    let result = document.getElementById("result");
    let attemptText = document.getElementById("attempts");

    if(!guess){
        result.innerText = "⚠ Please enter a number!";
        result.style.color = "#FFD27C";
        return;
    }

    attempts++;
    attemptText.innerText = "Attempts: " + attempts;

    if(guess === secretNumber){
        result.innerText = "🎉 Correct! You guessed it!";
        result.style.color = "#7CFF7C";

        let score = Math.max(100 - attempts * 5, 10);
        localStorage.setItem("guessScore", score);
    }
    else if(guess > secretNumber){
        result.innerText = "⬇ Too High";
        result.style.color = "#FFD27C";
    }
    else{
        result.innerText = "⬆ Too Low";
        result.style.color = "#FFD27C";
    }

    document.getElementById("guessInput").value = "";
}
