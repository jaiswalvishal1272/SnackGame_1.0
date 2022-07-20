function startAgain(){
    location.href="http://127.0.0.1:5500/gamepage.html";
}
function displayScore(){
    let Scoreshow=document.getElementById("SCORE");
    console.log(Scoreshow.value);
    let score=sessionStorage.getItem('obtainedScore');
    Scoreshow.innerHTML="";
    Scoreshow.innerHTML="Score:"+score;
}
