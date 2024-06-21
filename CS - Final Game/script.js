let p = document.getElementsByName("image")  //sets the variable P to get the elements by the name 


function show() {  //function that run the entire rock paper scissors code

    let option = document.getElementsByName("op") //calls the function to get the element by the name 


    if (option[0].checked) {  //if the first option which is rock is selected...
        out1.innerHTML = "You Selected Rock" //tells the player what they chose
        out2.innerHTML = "The Ai Chose Paper! You Lose Try again" //tells the player what the ai chose 
        p[1].style.opacity = .8 // chnages the opacity to show what the player chose
        p[0].style.opacity = .8
        p[2].style.opacity = 0

    }


    
    if (option[1].checked) {  //if the 2nd option whcih is paper is slected 
        out1.innerHTML = "You Selected Paper!"  //repeeats to player what they chose
        out2.innerHTML =  " The Ai Chose Scissors! You Lose Try again"//states the ai's choice
        p[0].style.opacity = .8 //chnages opacity to make it visible
        p[2].style.opacity = .8
        p[1].style.opacity = 0

    }



    if (option[2].checked) {  //if the 3rd option which is scissors is selcted
        out1.innerHTML = "You Selected Scissors!" //repeats to player what they chose
        out2.innerHTML = "The Ai Chose Rock! You Lose Try again" //states the ai's choice
        p[2].style.opacity = .8 //changes opacity to make it visible
        p[1].style.opacity = .8
        p[0].style.opacity = 0

    }


    


}


function reset() { //reset function for the button 
    out1.innerHTML = "...";  //clears the text that appears between out1 & and out2
    out2.innerHTML = "...";
       p[2].style.opacity = 0//resets all the images opacity to 0
        p[1].style.opacity = 0
        p[0].style.opacity = 0
}

