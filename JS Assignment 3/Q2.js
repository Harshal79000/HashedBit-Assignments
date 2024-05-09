let str = 'I love my India';
const words = str.split(' ');
const lastWord = words.pop();
const firstWord = words.shift();
const output = words.join(' ') + ' ' + lastWord + ' ' + firstWord;
console.log(output); // Output: India my love I
