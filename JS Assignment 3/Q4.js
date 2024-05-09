const str = "The quick brown fox jumps over the lazy dog.";

let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < str.length; i++) {
  const char = str[i].toLowerCase();

  if ('aeiou'.indexOf(char) !== -1) {
    vowelCount++;
  }

  else if (char.match(/[a-z]/)) {
    consonantCount++;
  }
}

console.log(`Number of vowels: ${vowelCount}`);
console.log(`Number of consonants: ${consonantCount}`);
