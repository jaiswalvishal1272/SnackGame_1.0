// Game Constraints & Variables
food = {x: 3, y: 5};
let inputDirection = {x: 0, y: 0};

// change the direction of snake
window.requestAnimationFrame(main);
window.addEventListener("keydown", e => {
    inputDir = {x: 0, y: 1}
    switch(e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDirection.x = 0;
            inputDirection.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDirection.x = 0;
            inputDirection.y = 1;
            break;
        
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDirection.x = -1;
            inputDirection.y = 0;
            break;
            
        case "ArrowRight":
            console.log("ArrowRight");
            inputDirection.x = 1;
            inputDirection.y = 0;
            break;
        default :
        break;
    }
})