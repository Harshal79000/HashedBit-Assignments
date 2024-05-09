function digitalRoot(n) {
    let num = n;
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    return num;
}

const num = 456;
const result = digitalRoot(num);
console.log(result); // 6
