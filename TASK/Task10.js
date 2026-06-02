// Create an array of numbers and take input from the user Take a number as input from the user and add it to the end of the array. Print the updated array.

let arr = [1,2,3,4,5,6,7,83];
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
  let a = Number.parseInt(answer);
  arr.push(a);
  console.log(arr);
  rl.close();
});


