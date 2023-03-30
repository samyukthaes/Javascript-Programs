function add(a: number, b: number): number {
    return a + b;
  }
  
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  function divide(a: number, b: number): number {
    return a / b;
  }
  
  function calculator(): void {
    const num1 = Number(prompt("Enter the first number:"));
    const num2 = Number(prompt("Enter the second number:"));
    const operation = prompt("Enter the operation (+, -, *, /):");
    
    let result: number;
    
    switch(operation) {
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
    
    console.log(`Result: ${result}`);
  }
  
  calculator();
