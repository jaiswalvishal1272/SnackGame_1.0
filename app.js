// Game Constraints & Variables
let dir={x:0,y:0}
const backgroundMusic=new Audio("game_bgMusic.mp3");
const eatingMusic=new Audio("eat_music.mp3");
const gameoverMusic=new Audio("gameover.mp3");
const move=new Audio('moveMusic.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr=[{x:14 ,y:18}];
let food={x:10,y:10};
let score=0;
//let HighScore=0;

//to run my game in loop
function startGame(){
    backgroundMusic.play();
    window.requestAnimationFrame(loop);
    //gamelogic
    window.addEventListener('keydown',e=>{
        dir={x:1,y:1};
        
        switch(e.key){
            case 'ArrowUp':
                console.log('ArrowUp');
                dir.x=0;
                dir.y=-1;
                break;
            case 'ArrowDown':
                console.log('ArrowDown');
                dir.x=0;
                dir.y=+1;
                break;
            case 'ArrowLeft':
                console.log('ArrowLeft')
                dir.x=-1;
                dir.y=0;
                break;
            case 'ArrowRight':
                console.log('ArrowRght');
                dir.x=+1;
                dir.y=0;
                break;
            default:
                break;

        }
            
        

    })

}

//FUNCTIONS :
//TO run loop
function loop(ctime){
    window.requestAnimationFrame(loop);
    
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameRun();

}
//functions for update and move snake and food && game over condition
function gameRun(){
    //Update snake body and generate new food after snake ate the food
    if(food.x===snakeArr[0].x && food.y===snakeArr[0].y){
        eatingMusic.play();
        snakeArr.unshift({x:snakeArr[0].x+dir.x ,y:snakeArr[0].y+dir.y});
        score+=1;
        getScore();
        let a=2;
        let b=17;
        food={x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())};
    }
    for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]};
    }
    snakeArr[0].x += dir.x;
    snakeArr[0].y += dir.y;
    
    //let isCollapse=false;
    //if snake collide on wall of board || gameOver condition
    if(isCollapse(snakeArr)){
        gameoverMusic.play();
        backgroundMusic.pause();     
        ok(); 
    }
    //display the snake 
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        let SnakeElement=document.createElement('div');
        SnakeElement.style.gridRowStart=e.y;
        SnakeElement.style.gridColumnStart=e.x;
        if(index===0){
            SnakeElement.classList.add('head');
        }
        else{
            SnakeElement.classList.add('snake');
            SnakeElement.style.borderRadius = "2px"
        }
        board.appendChild(SnakeElement);
    })
    //display the food
    let foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}
//collide testing function
function isCollapse(snakeArr){
    for(let i=1;i<snakeArr.length;i++){
        if(snakeArr[0].x===snakeArr[i].x && snakeArr[0].y===snakeArr[i].y){
            gameoverMusic.play();
            return true;
            
        }

    }
    if(snakeArr[0].x>=21 || snakeArr[0].x<=-1 || snakeArr[0].y>=21 || snakeArr[0].y<=-1){
        return true;

    }
    return false;

}
//to display and get highscore
function getScore(){
    sessionStorage.setItem("obtainedScore",score);
    let scoreElement=document.getElementById('resultscore');
    scoreElement.innerHTML="SCORE:"+ sessionStorage.getItem('obtainedScore');
    let HighScore=localStorage.getItem('HIGHSCORE');
    
    if(score>=HighScore){
        localStorage.setItem("HIGHSCORE",score);
        let newhighScore=document.getElementById('resulthiscore');
        newhighScore.innerHTML="HIGHSCORE:"+localStorage.getItem('HIGHSCORE');

    
}
}
function ok(){
    confirm('Your Score:'+score)
    if(true){
        location.href="http://127.0.0.1:5500/lastPage.html";

    }

}
