const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;
const log = console.log;
const max = (...args) => Math.max(...args)
const min = (...args) => Math.min(...args)
const environment = {
    add, subtract, divide, log, max,
    pi: Math.PI, modulo, multiply, min
};

module.exports = { environment };