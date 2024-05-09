function reverseString(str) {
    const reversedChars = str.split('').reverse();
    const reversedString = reversedChars.join('');
    return reversedString;
}

const input = "Hello";
const output = reverseString(input);
console.log(output); // "olleH"
