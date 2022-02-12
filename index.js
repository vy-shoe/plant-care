var characterChosen;

function selectCharacter(value) {  
    characterChosen = value;
    alert("You selected " + characterChosen + " as your desk plant pet!"); 
    window.open("main/main.html")
} 

function getCharacter() { 
    if (characterChosen == "") {
        return "No character chosen"
    } else {
        return characterChosen;
    }
} 