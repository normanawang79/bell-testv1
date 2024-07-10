const prompt = require('prompt-sync')()
let age = prompt("Please enter your age: ");
age = parseInt(age)
let olderage = age + 20;
console.log('In 20 years time, you will be', olderage);
