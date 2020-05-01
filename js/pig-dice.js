const loaded =()=> {
    let highScore = 0;
    let games = 0;
    for(let idx = 0; idx < 100; idx++) {
    let score = playPigDice();
    if(score > highScore){
        highScore = score;
        games++;
    }
}
    setScore(highScore, games);
}

const setScore = (score,games) => {
   //let span = `<span>PigDice high score is ${score}</span>`;
   let span = `<span>It took ${games} games to score ${score}</span>`;
    document.getElementById("score").innerHTML = span;
}
const roll = () =>{
    return Math.floor(Math.random()*6) + 1;
}
const playPigDice = () => {
    let score = 0;
    let die = roll();
    while (die != 1) {
        score += die;
        die = roll();
    } 
    return score;
}