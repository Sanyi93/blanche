function performOperation(){
    // Getting the user inputs from the input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //Checking if the inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)){

        let resultMultiplication = multiply(num1, num2);
        let resultAddition = add(num1, num2);
        let resultDivision = add(num1, num2);

        //displaying the result
        displayResult(resultMultiplication, resultAddition, resultDivision)
    } else {
        displayResult('Please enter valid numbers')
numbers}
}

//function to multiply the numbers
function multiply(num1, num2){
    //introduce a debugger statement to pause execution
    debugger;

    //multiplying the numbers
    return num1 * num2;
}

//function addition
function add(num1, num2){
    //debugger
    debugger;

    return num1 + num2;
}

//function division
function divide(num1, num2){
    //debugger
    return num1/num2
}

//function to display the result

function displayResult(resultMultiplication, resultAddition, resultDivision){
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result of multiplication is ${resultMultiplication} `+'\n' +
    `The result of addition is ${resultAddition} ` + '\n' +
    `The result of division is ${resultDivision}`;
}