let string = 'INDIA';
const array = string.split('');
array.splice(-2, 0, 'ONES');
string = array.join('');
console.log(string); // Output: INDONESIA
