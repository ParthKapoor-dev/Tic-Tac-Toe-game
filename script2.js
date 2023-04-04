// 2 Player Game

const element11 = document.querySelector(".element-1-1");
const element12 = document.querySelector(".element-1-2");
const element13 = document.querySelector(".element-1-3");
const element21 = document.querySelector(".element-2-1");
const element22 = document.querySelector(".element-2-2");
const element23 = document.querySelector(".element-2-3");
const element31 = document.querySelector(".element-3-1");
const element32 = document.querySelector(".element-3-2");
const element33 = document.querySelector(".element-3-3");

const allElements = document.querySelectorAll(".ele");
const container = document.querySelector(".main-game-container");
const restart = document.querySelector(".restart");
const results = document.querySelector(".results");
const currentTurn = document.querySelector(".current-turn")
const xWon = document.querySelector(".x2")
const oWon = document.querySelector(".O2")

x=0;o=0;
xWon.innerText = `${x}`;
oWon.innerText = `${o}`;
gameActive = 1;
arr = ['0','0','0','0','0','0','0','0','0'];
currentPlayer = 'X';
const WinningConditions= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
arrayOfElements =[];
i=0
allElements.forEach((ele)=>{
    arrayOfElements[i] = ele;
    i++;
});


function elementClicked(event){
    if(gameActive){
        console.log(event.target);
        index = event.target.getAttribute("index") -1;
        if(arr[index] == '0')
        {
            arr[index] = currentPlayer;
            event.target.innerText = currentPlayer;
            winner();
            if(currentPlayer == 'X')
                currentPlayer = 'O';
            else
                currentPlayer = 'X';
                if(gameActive)
                    currentTurn.innerText = `Turn is of ${currentPlayer}`;
        }
    }
    
    
}




function restartGame(event){
    console.log("Game is Restarted");
    gameActive = 1;
    currentTurn.innerText = `Turn is of ${currentPlayer}`;
    results.innerText = "Results will be shown here";
    arr = ['0','0','0','0','0','0','0','0','0'];
    allElements.forEach((ele)=>{
        ele.innerText = "";
    })
}

function winner()
{
    ans = 0;
    ans =  WinningConditions.some((array) =>{
        // console.log(array);
        return array.every((i) => {
            // console.log(i);
            return arr[i]== currentPlayer;
        })
        })

    // ans.forEach((ar)=>{
    //     ar.forEach((i)=>{
    //         if(i = true)
    //     })

    //     console.log(ar);
    //     if(ar == [true, true, true]){
    //         console.log("This is");
    //         console.log(ar);
    //         key = 1;
    //     }
    // })
    if(ans){
        winArray=[];
        WinningConditions.forEach((array)=>{
            if(array.every(i => arr[i]== currentPlayer))
                winArray = array;
        })
        const winner = currentPlayer
        results.innerText = `${winner} is the winner`;
        currentTurn.innerText = "Game Over fellas";
        gameActive = 0;
        if(currentPlayer == "X") {
            x++;
            const previousScore = JSON.parse(window.localStorage.getItem('scores'));
            previousScore.x++;
            window.localStorage.setItem('scores', JSON.stringify(previousScore));
        }
        else {
            o++;
            const previousScore = JSON.parse(window.localStorage.getItem('scores'));
            previousScore.y++;
            window.localStorage.setItem('scores', JSON.stringify(previousScore));
        }
        // xWon.innerText = `${x}`;
        // oWon.innerText = `${o}`;
        xWon.innerText = JSON.parse(window.localStorage.getItem('scores')).x;
        oWon.innerText = JSON.parse(window.localStorage.getItem('scores')).y;
    }
}


const initialPageLoad = () => {
    const scores = JSON.parse(window.localStorage.getItem('scores'));
    if (!scores) {
        let initialScore = {
            x: 0,
            y: 0
        }
        window.localStorage.setItem('scores', JSON.stringify(initialScore));
        xWon.innerText = 0;
        oWon.innerText = 0;
    }
    else {
        xWon.innerText = scores.x;
        oWon.innerText = scores.y;
    }
}



// EVENT LISTENERS
if(gameActive){
    allElements.forEach((element)=>{
        element.addEventListener("click",elementClicked);
    })
    restart.addEventListener("click",restartGame);
}
