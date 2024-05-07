let objectThing = {
    answer1: 'right',
    answer2: 'up',
    answer3: 'left',
    answer4: 'continue',
    answer5: 'run away',
    answer6: 'walk across'
};

let outputDiv = document.getElementById('output');
let left = document.getElementById('left');
let right = document.getElementById('right');
let up = document.getElementById('up');
let continues = document.getElementById('continue');
let runAway = document.getElementById('run-away');
let gameOver = document.getElementById('game-over');
let troll = document.getElementById('troll');
let walkAcross = document.getElementById('walk-across')
let bridgeLives = document.getElementById('lives');

let leftValue;
let rightValue;
let upValue;
let continueValue;
let runAwayValue;
let walkAcrossValue;

// Changes text if you try to go to the deadend when you click right to "You've already been here, stahp it"
let count = 0;
// Handles the start text, so it actually resets completely.
let textCount = 0;
// Don't remember
let walkAcrossCount = 0;
// randoms text when you walk across bridge
let randomer = Math.random();
// How many times you can cross the bridge when it creaks
let bridgeDeath = 3;

// buttons for when you click walk across button
let castle1 = document.createElement('button');
let castle2 = document.createElement('button');
let castleWoodText = document.createTextNode('castle of wood');
let castleStoneText = document.createTextNode('castle of stone');

// buttons for when you click caslte of stone button
let enterStone = document.createElement('button');
let goBack = document.createElement('button');
let enterText = document.createTextNode('enter');
let goBackText = document.createTextNode('go back');

// buttons for when you click castle of wood button
let enterWood = document.createElement('button');
let goBackWood = document.createElement('button');
let enterTextWood = document.createTextNode('enter');
let goBackTextWood = document.createTextNode('go back');

//Buttons for when you're inside the wooden castle
let woodGoOut = document.createElement('button');
let woodGoOutText = document.createTextNode('go outside');
let blackKnight = document.createElement('button');
let blackKnighttext = document.createTextNode('go up');
let doorNextToStaircase = document.createElement('button');
let doorNextToStaircaseText = document.createTextNode('go forward');
let rightDoor = document.createElement('button');
let rightDoorText = document.createTextNode('go right');

//Buttons for when you're inside the stone castle
let stoneGoOut = document.createElement('button');
let stoneGoOutText = document.createTextNode('go outside');
let leftPassageWay = document.createElement('button');
let leftPassageWayText = document.createTextNode('left passage');
let rightPassageWay = document.createElement('button');
let rightPassageWayText = document.createTextNode('go right');


//images variables
let castleImage = document.getElementById('the-body');
let bloForest = document.getElementById('the-body');
let bloBridge = document.getElementById('the-body');
let sleepingTroll = document.getElementById('the-body');
let scaryTroll = document.getElementById('the-body');
let castleWood = document.getElementById('the-body');
let castleStaircase = document.getElementById('the-body');
let darkCastle = document.getElementById('the-body');
let theRoad = document.getElementById('the-body');
let gameOverBridge = document.getElementById('the-body');
let gameOverKnight = document.getElementById('the-body');
bloForest.style.backgroundImage = "url('images/bloforest.jpg')";
bloForest.style.backgroundSize = '600px 400px';
bloForest.style.backgroundPosition = 'center';
bloForest.style.backgroundRepeat = 'no-repeat';


walkAcross.addEventListener('click', () => {
    walkAcrossValue = objectThing.answer6;
    console.log(walkAcrossValue);
    displayNextStep(walkAcrossValue);
})

left.addEventListener('click', () => {
    leftValue = objectThing.answer3;
    console.log(leftValue);
    displayNextStep(leftValue);
})

right.addEventListener('click', () => {
    rightValue = objectThing.answer1;
    console.log(rightValue);
    displayNextStep(rightValue);
})

up.addEventListener('click', () => {
    upValue = objectThing.answer2;
    console.log(upValue);
    displayNextStep(upValue);
})

continues.addEventListener('click', () => {
    continueValue = objectThing.answer4;
    console.log(continueValue);
    displayNextStep(continueValue);
})

runAway.addEventListener('click', () => {
    runAwayValue = objectThing.answer5;
    console.log(runAwayValue);
    displayNextStep(runAwayValue);
})

// hides left, right up and game over button
function hideButtonsOne () {
    left.style.display = 'none';
    right.style.display = 'none';
    up.style.display = 'none';
    gameOver.style.display = 'none';
}

// hides continue, run away and game over button
function hideButtonsTwo() {
    continues.style.display = 'none';
    runAway.style.display = 'none';
    gameOver.style.display = 'none';
}

// makes left, up and right button visible again
function inlineButtons() {
    left.style.display = 'inline-block';
    up.style.display = 'inline-block';
    right.style.display = 'inline-block';
}

// when you click the castle of stone button
function outdivStone() {
    castleImage.style.backgroundImage = "url('images/outsidedarkcastle.jpg')";
    castleImage.style.backgroundSize = '600px 400px';
    castleImage.style.backgroundPosition = 'center';
    castleImage.style.backgroundRepeat = 'no-repeat';
    outputDiv.innerHTML = '<p>As you arrive before the ancient castle, its formidable presence looms large against the backdrop of the desolate landscape. The walls, dark as the night itself, stand tall and imposing, their surface gleaming dully in the subdued light of the overcast sky. You decide to:</p>'
    castle1.style.display = 'none';
    castle2.style.display = 'none';
    enterStone.style.display = 'inline-block';
    goBack.style.display = 'inline-block';
    enterStone.appendChild(enterText);
    goBack.appendChild(goBackText);
    document.body.appendChild(enterStone);
    document.body.appendChild(goBack);
    castleImage.style.display = 'inline-block';
}

// When you click the castle of wood button
function outdivWood() {
    outputDiv.innerHTML = "<p>As you approach the castle of wood, the sky hangs heavy with oppressive grey clouds, suffocating any semblance of light. The first thing that strikes you is the blood-red hue of the rooftops, a stark contrast against the dreary backdrop, like freshly spilled gore staining the earth. You decide to:</p>";
    castle1.style.display = 'none';
    castle2.style.display = 'none';
    enterWood.style.display = 'inline-block';
    goBackWood.style.display  = 'inline-block';
    enterWood.appendChild(enterTextWood);
    goBackWood.appendChild(goBackTextWood);
    document.body.appendChild(enterWood);
    document.body.appendChild(goBackWood);
    castleWood.style.backgroundImage = "url('images/wood-castle.png')";
    castleWood.style.backgroundSize = '600px 400px';
    castleWood.style.backgroundPosition = 'center';  
    castleWood.style.backgroundRepeat = 'no-repeat';
}

// When you click the enter button for the wooden castle
function enterWoodCastle() {
    outputDiv.innerHTML = "<p>As you enter the wooden castle, your gaze is immediately drawn to the black knight standing on the second level above the staircase. Its presence ominous, its armor gleaming darkly in the dim light. There are multiple pathways possible from here, you decide to:</p>";
    castleStaircase.style.backgroundImage= "url('images/image_ADS9BLZe_1713866202748_raw.jpg')"
    castleWood.style.backgroundPosition = 'center';  
    castleWood.style.backgroundRepeat = 'no-repeat';
    goBackWood.style.display = 'none';
    enterWood.style.display = 'none';
    woodGoOut.style.display = 'inline-block';
    blackKnight.style.display = 'inline-block';
    doorNextToStaircase.style.display = 'inline-block';
    woodGoOut.appendChild(woodGoOutText);
    document.body.appendChild(woodGoOut);
    blackKnight.appendChild(blackKnighttext);
    document.body.appendChild(blackKnight);
    doorNextToStaircase.appendChild(doorNextToStaircaseText);
    document.body.appendChild(doorNextToStaircase);
}

function enterStoneCastle() {
    outputDiv.innerHTML = "<p>You enter the stone castle. There's only one way forward. You decide to:</p>"
    stoneGoOut.appendChild(stoneGoOutText);
    document.body.appendChild(stoneGoOut);
    rightPassageWay.appendChild(rightPassageWayText);
    document.body.appendChild(rightPassageWay);
    stoneGoOut.style.display = 'inline-block';
    enterStone.style.display = 'none';
    goBack.style.display ='none';
    rightPassageWay.style.display = 'inline-block';
    darkCastle.style.backgroundImage = "url('images/darkcastle.jpg')";
    darkCastle.style.backgroundPosition = 'center';
    darkCastle.style.backgroundSize = '600px 400px';
    darkCastle.style.backgroundRepeat = 'no-repeat';
}

// adds castle of wood and castle of wood buttons when you click walk across
function addButtonCastle() {
    castle1.appendChild(castleStoneText);
    castle2.appendChild(castleWoodText);
    document.body.appendChild(castle1);
    document.body.appendChild(castle2);
}

//Go back to outside the wooden castle function
function goOutsideWood() {
    outputDiv.innerHTML = "<p>You go outside the wooden castle.</p>";
    castle1.style.display = 'none';
    castle2.style.display = 'none';
    woodGoOut.style.display = 'none';
    enterWood.style.display = 'inline-block';
    goBackWood.style.display  = 'inline-block';
    blackKnight.style.display = 'none';
    doorNextToStaircase.style.display = 'none';
    enterWood.appendChild(enterTextWood);
    goBackWood.appendChild(goBackTextWood);
    document.body.appendChild(enterWood);
    document.body.appendChild(goBackWood);
    castleWood.style.backgroundImage = "url('images/wood-castle.png')";
    castleWood.style.backgroundSize = '600px 400px';
    castleWood.style.backgroundPosition = 'center';  
    castleWood.style.backgroundRepeat = 'no-repeat';
}

function goOutsideStone() {
    outputDiv.innerHTML = "<p>You go outside the stone castle.</p>";
    castle1.style.display = 'none';
    castle2.style.display = 'none';
    stoneGoOut.style.display = 'none';
    enterStone.style.display = 'inline-block';
    goBack.style.display = 'inline-block';
    leftPassageWay.style.display = 'none';
    rightPassageWay.style.display = 'none';
}

// When you click go back after you're at the castle of stone
function goBackFunc() {
    outputDiv.innerHTML = "<p>You went back to the other side of the bridge.</p>";
    walkAcross.style.display = 'inline-block';
    enterStone.style.display = 'none';
    goBack.style.display = 'none';
    goBackWood.style.display = 'none';
    enterWood.style.display = 'none';
    runAway.style.display = 'inline-block';
    castleImage.style.background="0";
    bloBridge.style.backgroundImage = "url('images/blobridge.jpg')";
    bloBridge.style.backgroundSize = '600px 400px';
    bloBridge.style.backgroundPosition = 'center';
    bloBridge.style.backgroundRepeat = 'no-repeat';
}

function upstairs() {
    outputDiv.innerHTML = "<p>The black knight punches your head off.</p>";
    goBackWood.style.display = 'none';
    blackKnight.style.display = 'none';
    doorNextToStaircase.style.display = 'none';
    woodGoOut.style.display = 'none';
    gameOverBridge.style.backgroundImage = "url('images/game-over.jpg')";
    gameOverBridge.style.backgroundSize = '600px 400px';
    gameOverBridge.style.backgroundPosition = 'center';
    gameOverBridge.style.backgroundRepeat = 'no-repeat';
    runAway.style.display = 'inline-block';
    textCount += 1;
    bridgeDeath = 3;
}

// go back that has the function of going back to the other side of the bridge
goBack.addEventListener('click', goBackFunc);


goBackWood.addEventListener('click', goBackFunc);

// executes the outdivStone and outdivWood functions when you click on the castle of stone or castle of wood button
castle1.addEventListener('click', outdivStone);
castle2.addEventListener('click', outdivWood);

// exectues the enterWoodCastle function when you click on the enter button with the wooden castle
enterWood.addEventListener('click', enterWoodCastle);

enterStone.addEventListener('click', enterStoneCastle);

//inside the wooden castle buttons
woodGoOut.addEventListener('click', goOutsideWood);
blackKnight.addEventListener('click', upstairs);

//inside the stone castle buttons
stoneGoOut.addEventListener('click', goOutsideStone);

// hides the continue, run away and walk across button when you start the game
continues.style.display = 'none';
runAway.style.display = 'none';
walkAcross.style.display = 'none';

function displayNextStep(direction) {
    outputDiv.innerHTML = "";
    if (direction === objectThing.answer3) {
        outputDiv.innerHTML += "<p>You come across a giant sleeping troll, do you continue or run away?</p>";
        runAway.innerHTML = 'run away'
        hideButtonsOne();
        continues.style.display = 'inline-block';
        runAway.style.display = 'inline-block';
        bloForest.style.background = '0';
        sleepingTroll.style.backgroundImage = "url('images/sleepingtroll.png')";
        sleepingTroll.style.backgroundSize = '600px 400px';
        sleepingTroll.style.backgroundPosition = 'center';
        sleepingTroll.style.backgroundRepeat = 'no-repeat';
    } else if (direction === objectThing.answer2) {
        outputDiv.innerHTML += "<p>You see a bridge.</p>";
        runAway.innerHTML = 'go back'
        gameOver.style.display = 'none'
        continues.style.display = 'none';
        runAway.style.display = 'inline-block';
        walkAcross.style.display = 'inline-block';
        bloForest.style.background="0";
        bloBridge.style.backgroundImage = "url('images/blobridge.jpg')";
        bloBridge.style.backgroundSize = '600px 400px';
        bloBridge.style.backgroundPosition = 'center';
        bloBridge.style.backgroundRepeat = 'no-repeat';
        hideButtonsOne();
        walkAcrossCount += 1
        console.log(bridgeDeath);
    } else if (direction === objectThing.answer6 && randomer < 0.5) {
        outputDiv.innerHTML += "<p>You pass the bridge safely. You see a road, leading you two places, you decide to go to the:</p>"
        castle1.style.display = 'inline-block';
        castle2.style.display = 'inline-block';
        theRoad.style.backgroundImage = "url('images/fantasy_world_14_by_avengerb6_dgmjjdh-pre.jpg')";
        theRoad.style.backgroundSize =' 600px 400px';
        theRoad.style.backgroundPosition ='center',
        theRoad.style.backgroundRepeat = 'no-repeat';
        continues.style.display = 'none';
        runAway.style.display = 'none';
        walkAcross.style.display = 'none';
        walkAcrossCount = 0;
        randomer = Math.random();
        console.log(randomer);
        console.log(bridgeDeath);
    } else if (direction === objectThing.answer6 && randomer > 0.5){
        outputDiv.innerHTML += "<p>You hear the bridge starting to creak. You hurry over to the other side before something happens. You see a road, leading you two places, you decide to go to the:</p>"
        console.log(bridgeDeath);
        console.log(randomer);
        castle1.style.display = 'inline-block';
        castle2.style.display = 'inline-block';
        theRoad.style.backgroundImage = "url('images/fantasy_world_14_by_avengerb6_dgmjjdh-pre.jpg')";
        theRoad.style.backgroundSize =' 600px 400px';
        theRoad.style.backgroundPosition ='center',
        theRoad.style.backgroundRepeat = 'no-repeat';
        continues.style.display = 'none';
        runAway.style.display = 'none';
        walkAcross.style.display = 'none';
        walkAcrossCount = 0; 
        bridgeDeath -= 1;
        bridgeLives.innerHTML = `<p>Bridge tries left: ${bridgeDeath}</p>`
        randomer = Math.random();
        console.log(randomer);
        console.log(bridgeDeath);
        if (bridgeDeath === 0) {
            outputDiv.innerHTML = "<p>The bridge broke. You fell down and died.</p>"
            gameOverBridge.style.backgroundImage = "url('images/game-over.jpg')";
            gameOverBridge.style.backgroundSize = '600px 400px';
            gameOverBridge.style.backgroundPosition = 'center';
            gameOverBridge.style.backgroundRepeat = 'no-repeat';
            runAway.innerHTML = 'start over';
            runAway.style.display = 'inline-block';
            walkAcross.style.display = 'none';
            castle1.style.display = 'none';
            castle2.style.display = 'none';
            textCount += 1;
            bridgeDeath = 3;
        }   
    } else if (direction === objectThing.answer1 && count < 1) {
        outputDiv.innerHTML += "<p>You see no way through, you decide to go back.</p>";
        gameOver.style.display = 'none'
        count += 1;
    } else if (direction === objectThing.answer1 && count >= 1) {
        outputDiv.innerHTML += "<p>You've already been here, stahp it.</p>";
        gameOver.style.display = 'none'
        console.log(count)
    } else if (direction === objectThing.answer4) {
        outputDiv.innerHTML += "<p>You step on a branch, the troll awakens</p>"
        runAway.innerHTML = 'start over'
        gameOver.innerHTML = "<p>GAME OVER</p>"
        gameOver.style.display = 'flex'
        continues.style.display = 'none'
        textCount += 1
        console.log('Game over')
        sleepingTroll.style.background='0';
        gameOverBridge.style.backgroundImage = "url('images/game-over.jpg')";
        gameOverBridge.style.backgroundSize = '600px 400px';
        gameOverBridge.style.backgroundPosition = 'center';
        gameOverBridge.style.backgroundRepeat = 'no-repeat';
    } else if (direction === objectThing.answer5) {
        outputDiv.innerHTML += "<p>You come back to where you started. Where do you want to go, left, right or up?</p>"
        walkAcross.style.display = 'none';
        hideButtonsTwo();
        inlineButtons();
        scaryTroll.style.background = '0';
        bloForest.style.backgroundImage = "url('images/bloforest.jpg')";
        bloForest.style.backgroundSize = '600px 400px';
        bloForest.style.backgroundPosition = 'center';
        bloForest.style.backgroundRepeat = 'no-repeat';
        if (direction === objectThing.answer5 && textCount > 0) {
            outputDiv.innerHTML = "<p>Where do you want to go, left, right or up?</p>"
            textCount = 0;
            bridgeLives.innerHTML = `<p>Bridge tries left: ${bridgeDeath}</p>`
        }
    }
}

