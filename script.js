let clickMusic = new Audio("clickMusic.mp3");
let winMusic = new Audio("winMusic.mp3");
let turn = "X";
let gameOver = false;
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}
const checkWin = ()=>{
    let gridItemText = document.getElementsByClassName("gridItemText")
    let wins=[
        [0,1,2,2,6.8,0],
        [3,4,5,2,22,0],
        [6,7,8,2,37.3,0],
        [0,3,6,22.5,12.8,90],
        [1,4,7,22.5,-2.2,90],
        [2,5,8,22.5,-17.5,90],
        [0,4,8,17,14,45],
        [2,4,6,16,-17.5,135],
    ]
    wins.forEach(e =>{
        if((gridItemText[e[0]].innerText===gridItemText[e[1]].innerText)&&(gridItemText[e[1]].innerText===gridItemText[e[2]].innerText)&&(gridItemText[e[2]].innerText!=="")){
            info.innerHTML=gridItemText[e[0]].innerHTML + " Won"
            gameOver=true;
            winMusic.play(); 
            winImage.style.width= "50%"
            line.style.transform= `rotate(${e[5]}deg) translate(${e[3]}vh,${e[4]}vh)`;
            line.style.width="20vw" 
        }
    })
}
let gridItems = document.getElementsByClassName("gridItems")
Array.from(gridItems).forEach(element =>{
    let gridItemText = element.querySelector(".gridItemText")
    element.addEventListener("click",()=>{
        if(gridItemText.innerText===""){
            gridItemText.innerText=turn;
            clickMusic.play();
            checkWin ();
            turn = changeTurn();
            if(!gameOver){
                info.innerText= "Turn For "+ turn;
            }
        }
    })
});
reset.addEventListener("click",()=>{
    let gridItemText = document.querySelectorAll(".gridItemText")
    Array.from(gridItemText).forEach(element =>{
        element.innerHTML = ""
    });
    turn="X"
    gameOver = false;
    info.innerText= "Turn For "+ turn;
    winMusic.pause();
    winImage.style.width="0%"
    line.style.width="0" 
})