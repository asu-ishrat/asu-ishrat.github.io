let score = 0; 

function addValue(val, section){
    score = score + val; 
    switch(section){
        case "one": 
            document.getElementById("two").style.display = block; 
            break; 
        case "two": 
            document.getElementById("three").style.display = block; 
            break; 
        case "three": 
            document.getElementById("four").style.display = block; 
            break; 
        case "four": 
            document.getElementById("five").style.display = block; 
            break; 
        case "five": 
            document.getElementById("submit").style.display = block; 
            break; 
        default: 
            console.log("uhoh something broke")

    }
    return score; 



}

