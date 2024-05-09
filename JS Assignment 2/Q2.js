// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
    }
  
    return result;
  }
  
  console.log(calculate(5, 3, '+'));
  console.log(calculate(10, 4, '-'));
  console.log(calculate(4, 6, '*'));
  console.log(calculate(12, 3, '/'));
  console.log(calculate(7, 2, '%'));