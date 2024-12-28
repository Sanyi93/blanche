let grocery1;
let grocery2;
let grocery3;

function calculateGrocery(){
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.etElementById('grocery2').value);
    grocery3 = parseFloar(document.getElementById('grocery3').value);

    result = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = `The total for your grocery is:$ ${result}`;

    
}