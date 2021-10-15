const play4x4Grid = document.querySelector(".four-by-four");
const play6x6Grid = document.querySelector('.six-by-six');
const resetButton = document.querySelector('.reset')
const RenderGame = document.querySelector('.play')
const gameContainer = document.querySelector('.container')


let boxes = []

let numArr4x4 = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
let random4x4 = [];
let numArr6x6 = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];
let random6x6 = [];
let moveCounter = 0 
const moves = document.querySelector('.moves')


function removeChildren(div){
    while (div.firstChild){
        div.removeChild(div.firstChild)
    }
}

function shuffleArray(array){
    let arrLength = array.length;
    let randomIndex;
    let lastNum;

while(arrLength){
    randomIndex = Math.floor(Math.random() * arrLength--); //random index number based on -1 arrayLength

    lastNum = array[arrLength];// we are selecting the last number in the array and storing it 

    array[arrLength] = array[randomIndex]; // so now we are taking the last number from the array and placing it randomly in the array 

    array[randomIndex] = lastNum; // so now we are taking the random placed index and placing it at the end so that we dont select it again 
}
return  array
}

function renderArray(array){
    for(let i=0; i< array.length; i++){
        boxes[i]['currentDiv'].tetContent = ""
    }

    for(let i=0; i< array.length; i++){
        boxes[i]['currentDiv'].append(array[i])
    }
}

function restMovesCounter(){
    moveCounter = 0 
    moves.innerText = `${moveCounter}`
}

function gamePlay(){
    let clickCounter = 0
    let firstChoice, secoundChoice;
    let firstChoiceDiv, secoundChoiceDiv;
    
        gameContainer.addEventListener('click', (e) => {
        let targetID = e.target.id
        let targetContent = e.target.innerText 
        clickCounter++
        moveCounter++
        moves.innerText = `${moveCounter}`
    if (clickCounter ===1){
    
        firstChoice = targetContent
         firstChoiceDiv = document.querySelector(`#${targetID}`)
         firstChoiceDiv.classList.add('show')
    } 
    if(clickCounter ===2){
    
        secoundChoice = targetContent
        secoundChoiceDiv = document.querySelector(`#${targetID}`)
        secoundChoiceDiv.classList.add('show')
    
        if(firstChoice === secoundChoice){
            console.log('bam')
            clickCounter = 0
        }else{
    
          
            setTimeout(() => {
                firstChoiceDiv.classList.remove('show')
                secoundChoiceDiv.classList.remove('show')
            }, 1000);
        
        clickCounter = 0
        }
    } 
    
    
    
    
    
    
        });
    }

play4x4Grid.addEventListener('click', (e) => {
    e.preventDefault()
    boxes =[]
    removeChildren(gameContainer)
    gameContainer.classList.remove("six-by-six")
    restMovesCounter()
    play4x4Grid.innerText = "restart 4x4"
    play6x6Grid.innerText = "play 6x6"


    for(let i = 1; i <= 16; i++){
        let playBox = document.createElement('div')
        playBox.id =  `card-${i}`
        playBox.classList.add('box')
        gameContainer.appendChild(playBox)
        let currentDiv = playBox
        boxes = [...boxes,{currentDiv, id:playBox.id}]
    }

    random4x4 = shuffleArray(numArr4x4)
    renderArray(random4x4)

    gamePlay()
});


play6x6Grid.addEventListener('click', (e) => {
    e.preventDefault()
    boxes =[]
    removeChildren(gameContainer)
    gameContainer.classList.remove("six-by-six")
    gameContainer.classList.add("six-by-six")
    restMovesCounter()
    play6x6Grid.innerText = "restart 6x6"
    play4x4Grid.innerText = "play 4x4"


    for(let i = 1; i <= 36; i++){
        let playBox = document.createElement('div')
        playBox.id =  `card-${i}`
        playBox.classList.add('box')
        gameContainer.appendChild(playBox)
        let currentDiv = playBox
        boxes = [...boxes,{currentDiv, id:playBox.id}]
    }

    random6x6 = shuffleArray(numArr6x6)
    renderArray(random6x6)

    gamePlay()
});







resetButton.addEventListener('click', (e) => {
    removeChildren(gameContainer)
    restMovesCounter()
    play4x4Grid.innerText = "play 4x4"
    play6x6Grid.innerText = "play 6x6"
});






// shuffel the array 
//rend the number into the numbers in the cards 
//and then add an even listener that will check if numbers are correct 

