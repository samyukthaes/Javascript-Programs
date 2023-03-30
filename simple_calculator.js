function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function calculator() {
    var num1 = Number(prompt("Enter the first number:"));
    var num2 = Number(prompt("Enter the second number:"));
    var operation = prompt("Enter the operation (+, -, *, /):");
    var result;
    switch (operation) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid operation!");
            return;
    }
    console.log("Result: ".concat(result));
}
calculator();
