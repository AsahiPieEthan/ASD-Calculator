function performCalculation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    }

    document.getElementById('result').textContent = `The result is: ${result}`;
}
let x = "I called it the ASD Calculator"


console.log (x)
document.getElementById("p1").innerHTML = x;