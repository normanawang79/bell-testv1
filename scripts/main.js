const prompt = require('prompt-sync')()
let age = prompt("Please enter your age: ");
age = parseInt(age)
let youngerage = age - 20;
console.log('20 years ago, you were', youngerage);
