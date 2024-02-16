function continueGame(){
    const alphabet = generateAlphabets();

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBgColor(alphabet);

}

function keyboardButtonEvent(event){
    const playerPressed = event.key;
    const currentAlphabet = document.getElementById('current-alphabet').innerText;

    const shownAlphabet = currentAlphabet.toLowerCase();
    if (playerPressed === "Escape"){
        hideElementById('play-ground');
        showElementById('final-score');
        document.getElementById('show-score').innerText = document.getElementById('current-score').innerText;
        removeBgColor(shownAlphabet);
    }
    

    if (playerPressed === shownAlphabet){

        const score = parseInt(document.getElementById('current-score').innerText);

        const newScore = score + 1;

        const finalScore = document.getElementById('current-score').innerText = newScore;

        // change the color and continue game
        removeBgColor(playerPressed);
        continueGame();
    }
    else{

        const currentLife = parseInt(document.getElementById('current-life').innerText);
        const finalLife = currentLife -1;
        if (currentLife === 1){
            hideElementById('play-ground');
            showElementById('final-score');
            document.getElementById('show-score').innerText = document.getElementById('current-score').innerText;
            removeBgColor(shownAlphabet);
        }
        document.getElementById('current-life').innerText = finalLife;
    }
    
}



document.addEventListener('keyup',keyboardButtonEvent);

function play(){
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    document.getElementById('final-score').classList.add('hidden');
    document.getElementById('current-life').innerText = 4;
    document.getElementById('current-score').innerText = 0;
    document.getElementById('show-score').innerText = 0;
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    continueGame();
}

function generateAlphabets(){
    const alphabetsall = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsall.split('');
    const randomNumber = Math.round(Math.random()*25);
    return (alphabets[randomNumber])
}

function setBgColor(id){
    const element = document.getElementById(id);
    element.classList.add('bg-orange-400');
}
function removeBgColor(id){
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-400');
}

function hideElementById(element){
    const ele = document.getElementById(element);
    ele.classList.add('hidden');
}
function showElementById(element){
    const ele = document.getElementById(element);
    ele.classList.remove('hidden');
}