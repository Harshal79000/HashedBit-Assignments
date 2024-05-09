//1. Write code to display from 1 to 100 but just even numbers. 

console.log("Even numbers from 1 to 100 (using a for loop):");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("\nEven numbers from 1 to 100 (using a while loop):");
let j = 2;
while (j <= 100) {
  console.log(j);
  j += 2;
}