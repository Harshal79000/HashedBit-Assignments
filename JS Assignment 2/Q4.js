// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumProductOfDigits(n1, n2) {
    const str1 = n1.toString();
    const str2 = n2.toString();
  
    let sum = 0;
  
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
      const digit1 = parseInt(str1[i]) || 0;
      const digit2 = parseInt(str2[i]) || 0;
      sum += digit1 * digit2;
    }
  
    return sum;
  }
  
  console.log(sumProductOfDigits(6, 34));
  console.log(sumProductOfDigits(45, 678));
  console.log(sumProductOfDigits(123, 45));
