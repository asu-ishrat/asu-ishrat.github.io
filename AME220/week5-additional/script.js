//  what am i looking for 
// if it exists 
// what do i need to do with this element 


/* MENU SHOW/HIDE */ 

let isShown = true; 

// create the event listener

//document.getElementById <--- This tells Javascript what to listen for 
//.addEventListener("eventType", fuction) <--- Listen for a click action, and then run this function 
document.getElementById("menuIcon").addEventListener("click", showHide);

// actual function 

function showHide() {

    // default behavior: asks whether or not the sidebar is currently being shown or not 


    //the container that is being hidden/shown 
    // this returns an ARRAY
    let sideBarHideShow = document.getElementsByClassName('sidebar')[0]; 

    // get Content html object 

    let content = document.getElementsByClassName('content')[0];



    // classes return as an ARRAY

    if(isShown) { 

       
        sideBarHideShow.style.display =  "none"; 

         if(window.innerWidth <=1000){
             content.style.position = "absolute";
        content.style.left = "0px" 
        content.style.width = "100%"
        isShown = false; 
        }

        else {content.style.position = "absolute";
        content.style.left = "50px" 
        content.style.width = "calc(100%-50px)"
        isShown = false; 
        }
    }

    else{
        sideBarHideShow.style.display =  "block"; 

        if(window.innerWidth <= 1000){
        content.style.position = "absolute";
        content.style.left = "0px" 
        content.style.width = "100%"
        isShown = true;
        }
        else{
        content.style.position = "absolute";
        content.style.left = "200px" 
        content.style.width = "calc(100%-200px)"
        isShown = true; }
    }

}

/* CHANGING COLORS AKA HOW TO SURVIVE A CRASHOUT */ 

// step 1: identify what it is what we want to fire the event 

document.getElementById("one").addEventListener("click", changeColors);

// step 2: tell javascript what to do when event is fired (what will happen if a user clicks the button )

function changeColors() { 

    console.log("Change Colors Is Firing")

    // create a target for our event 

    let content = document.getElementsByClassName('content')[0]

    console.log(content.style.color)

    if(content.style.color == '')
    {
        content.style.color = 'var(--chili-red)'
    }

    if(content.style.color == 'var(--chili-red)')
    {
        content.style.color = 'white'
    }

    else if(content.style.color == 'white')
    {
        content.style.color = 'var(--chili-red)'

    }


}