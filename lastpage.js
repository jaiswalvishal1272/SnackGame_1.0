function startAgain(){
    location.href="./gamepage.html";
}
function displayScore(){
    let Scoreshow=document.getElementById("SCORE");
    console.log(Scoreshow.value);
    let score=sessionStorage.getItem('obtainedScore');
    Scoreshow.innerHTML="";
    Scoreshow.innerHTML="Score:"+score;
}
