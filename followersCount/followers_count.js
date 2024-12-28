let count = 0; //initializing count to 0

function increaseCount(){
    count++; //incrementing count by 1
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; //displaying the count in the html  
}

function checkCountValue(){
    if(count === 10){
        alert("Your instagram post gained 10 followers! Congratulations!");
    } else if (count === 20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetCount(){
    count=0;
    displayCount();    
    alert("The number of your followers was reset");

}
