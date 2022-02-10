var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment(){

    if (currentNumber <= 9) {
        currentNumber = currentNumber +1 ;
        currentNumberWrapper.innerHTML = currentNumber;
        
    } 
}

function decrement(){

    if (currentNumber >= -9) {
        currentNumber = currentNumber -1 ;
        currentNumberWrapper.innerHTML = currentNumber;
        
    } 
}

function cor() {
    if (currentNumber >=1 ) {
        currentNumberWrapper.style.color = "purple";
       
    } else if (currentNumber <= -1 ) {
        currentNumberWrapper.style.color = "rgb(255, 138, 4)";
        
    } else {
        currentNumberWrapper.style.color = "black";
      
    }
}
