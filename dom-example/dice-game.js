
// focus 

function inputFocus(id){
    id.style.backgroundColor = "white" 
    id.style.color = "black"
}

// generate 

function generateUserName(id){
    const firstName = ["Shah", "Lara", "John", "Zelda", "Isaac"]
    const lastName = ["Rukh-Khan", "Croft", "117", "Hyrule", "Clarke"]

    try{
        let stringName = firstName[Math.floor(Math.random()*5)]+" "+lastName[Math.floor(Math.random()*5)]
        if(stringName.includes("undefined"))
        {
            stringName = "Leeroy Jenkins (OG)"
            id.value = stringName; 

        }

        id.value = stringName; 
        
    }

    catch(err) {
        let stringName = "Leeroy Jenkins (Mass Effect)"
        console.log(error)
    }

        id.style.backgroundColor = "white" 
        id.style.color = "black"

}

function saveUserName(){

    let textInputVal = document.getElementById("username").value; 
    return textInputVal;

}


function diceRoll(textField, pId, hId, endResult){

    let name = saveUserName(); 

    if(name == "" || name == " " || name == "Character's Name")
    {
        textField.style.backgroundColor = "white"; 
        textField.style.border = "2px solid red"
        textField.style.color = "red"

    }

    else {

        textField.style.backgroundColor = "white"; 
        textField.style.border = "2px solid green"
        textField.style.color = "black"

        let dice = Math.floor((Math.random()*20)+1); 

        pId.innerHTML = `${dice}`; 
        diceColor(dice); 
        hId.innerHTML = `Welcome ${name}`
        let outcomes = narrativeOutcome(dice); 
        endResult.innerHTML = `<p>You rolled a ${dice}</p> ${outcomes}`


    }
}

function diceColor(dice) {
    let diceId = document.getElementById("dice"); 
    let diceVal = dice; 
    console.log()

    switch(diceVal){
        case 1: 
            diceId.style.stroke = "red";
            diceId.style.fill = "red"
            diceId.style.strokeWidth = "10px"
            break; 
        case 20: 
            diceId.style.stroke = "gold";
            diceId.style.fill = "gold"
            diceId.style.strokeWidth = "10px"
            break; 
        default: 
            diceId.style.stroke = "white";
            diceId.style.fill = "white"
            diceId.style.strokeWidth = "1px"

    }

}

function narrativeOutcome(dice) {

    if(dice == 1) 
    {
        return "<p>Critical Failure <br/> You get so mad that you walk into the dragon's fire and you ask why do you do this?</p>"
    }

    else if(dice >= 2 && dice <= 11)

        {
            return "<p>You realize that you're in Skyrim and you hate it. You really wanted to be in Fallout.</p>"
        }

    else if(dice >=12 && dice <= 19 )
    {
        return "<p>You're in Skyrim, and you've played this game sooo many times it's modded and you're already trying to break it.</p>"
    }

    else if(dice == 20)
    {
        return "<b>Critical Success<b><br/><p>You turn off your PC/Xbox/Switch/PS/Fridge</p>"
    }
}