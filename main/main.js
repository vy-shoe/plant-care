// import getCharacter from './index.js';
// var plant = getCharacter();
var watered = false;

function waterPlant() {
    // console.log(plant);
    if (watered == true) {
        alert("I'm currently schlurping! 🪴💦");
    } else {
        alert("Thanks for hydrating me! Yum... 🤤🌱!");
    }
    document.getElementById("image").src = "/assets/plants/succulent1.png"
    watered = true;
    startTimer();
    document.getElementById("text").innerHTML = "Your plant is doing a great job– just like you :)";
}


function startTimer() {
    setTimeout(midPlant, 1000 * 5); //5 seconds
    setTimeout(dryPlant, 1000 * 10); //10 seconds
    setTimeout(needsWater, 1000 * 15);
}

function midPlant() {
    document.getElementById("image").src = "/assets/plants/succulent2.png"
    document.getElementById("text").innerHTML = "Your plant is staying hydrated, you should take a break and drink water"
}

function dryPlant() {
    document.getElementById("image").src = "/assets/plants/succulent3.png"
    document.getElementById("text").innerHTML = "Your plant needs some attention!"
    watered = false;
}

function needsWater() {
    alert("Help me, I'm thirsty! 🥵.🌿");
}