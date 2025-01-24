function performOperation(){
    // Getting the user inputs from the input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //Checking if the inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)){

        let result = multiply(num1, num2);

        //displaying the result
        displayResult(result)
    } else {
        displayResult('Please enter valid')
numbers}
}

//function to multiply the numbers
function multiply(num1, num2){
    //introduce a debugger statement to pause execution
    debugger;

    //multiplying the numbers
    return num1 * num2;
}

//function to display the result

function displayResult(result){
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is ${result}`;
}