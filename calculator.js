const sum = (numArrays) => {
    let sum = numArrays[0];
    for(let i = 1; i < numArrays.length; i++) {
        sum += numArrays[i];
    }
    return sum;
}

const subtract = (numArrays) => {
    let difference = numArrays[0];
    for(let i = 1; i < numArrays.length; i++) {
        difference -= numArrays[i];
    }
    return difference;
}

const multiply = (numArrays) => {
    let product = numArrays[0];
    for(let i = 1; i < numArrays.length; i++) {
        product *= numArrays[i];
    }
    return product;
}

const divide = (num1, num2) => num1 / num2;

const power = (num1, num2) => Math.pow(num1, num2);

const modulo = (num1, num2) => num1 % num2;

module.exports = {sum, subtract, divide, multiply, power, modulo};