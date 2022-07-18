console.log("This is attached");
const backgroundMusic=new Audio("/game_bgMusic.mp3");

const eatingMusic=new Audio("/eat_music.mp3");
const gameoverMusic=new Audio("/gameover.wav");
let speed=2;
//backgroundMusic.play();
//to run my game in loop
function loop(ctime){
    window.requestAnimationFrame(loop);
    console.log(ctime);
    if((ctime-lastPaintTime)/1000 <1/speed){
        return;
    }
    lastPaintTime=ctime;
}
//loop();
