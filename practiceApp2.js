const {sum, subtract, divide, multiply, power, modulo} = require('./calculator.js')

const sampleNum = [10, 4, 3, 2];

console.log(`The sum of the numbers is ${sum(sampleNum)}`);
console.log(`The difference of the numbers is ${subtract(sampleNum)}`);
console.log(`The product of the numbers is ${multiply(sampleNum)}`);
console.log(`The quotient of the two numbers is ${divide(6, 3)}`);
console.log(`The quotient of the two numbers is ${power(2, 4)}`);
console.log(`The quotient of the two numbers is ${modulo(7, 3)}`);
