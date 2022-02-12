import { characterChosen } from './index.js';
const PLANT = characterChosen;
var watered = false;

function setCharacter() {

}

function waterPlant() {
    console.log(PLANT);
    if (watered == true) {
        alert("I'm currently schlurping still! 🪴💦");
    } else {
        alert("Thanks for hydrating me! Yum... 🤤🌱!")
    }
    watered = true;
    startTimer();
}

function startTimer() {
    setTimeout(midPlant, 1000 * 5); //5 seconds
    setTimeout(dryPlant, 1000 * 10); //10 seconds
}

function midPlant() {
    
}

function dryPlant() {
    alert("Help me, I'm thirsty! 🥵.🌿")
    watered = false;
}