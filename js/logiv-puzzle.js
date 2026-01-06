function checkAnswers(){
    let score = 0;

    // Correct answers
    if(Number(document.getElementById("q1").value) === 30) score++;   // n(n+1)
    if(Number(document.getElementById("q2").value) === 25) score++;   // squares
    if(Number(document.getElementById("q3").value) === 80) score++;   // ×2

    localStorage.setItem("score_puzzle", score);

    let result = document.getElementById("result");

    if(score === 3){
        result.innerText = "🎉 Excellent! All answers correct (3/3)";
        result.style.color = "#7CFF7C";
    }
    else{
        result.innerText = `🧠 You solved ${score} out of 3 puzzles`;
        result.style.color = "#FFD27C";
    }
}
