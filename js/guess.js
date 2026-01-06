let secret = Math.floor(Math.random()*10) + 1;
let attempts = 0;

function checkGuess(){
    let input = document.getElementById("guess");
    let value = input.value;
    let result = document.getElementById("result");

    if(value === ""){
        result.innerText = "⚠ Enter a number";
        return;
    }

    attempts++;
    document.getElementById("attempts").innerText = "Attempts: " + attempts;

    if(value == secret){
        result.innerText = "🎉 Correct!";
        result.style.color = "#7CFF7C";

        localStorage.setItem("score_guess", attempts);
    }
    else if(value > secret){
        result.innerText = "📉 Too high";
        result.style.color = "#FFD27C";
    }
    else{
        result.innerText = "📈 Too low";
        result.style.color = "#FFD27C";
    }
}
