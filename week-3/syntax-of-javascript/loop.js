// Write a function called sum that finds the sum from 1 to a number

function sum(n) {
    let sum = 0
    for(let i = 1; i <= n; i++) {
        sum+=i;
    }
    return sum;
}

const num = 5;
const result = sum(num);
console.log(result);
