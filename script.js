function erase(){
    document.getElementById("result").value = "";
}

function getValue(number){
    document.getElementById("result").value += number;
}


function calculate(){
    var userInput = document.getElementById("result").value;    // Storing the input from user
    var outcome = math.evaluate(userInput);                     // Evaluate user's math
    document.getElementById("result").value = outcome;          // Output
    console.log(userInput + " = " + outcome);                   // The history of calculations
    
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {                           // Calculation with "Enter" key
        calculate(); 
    }
});
