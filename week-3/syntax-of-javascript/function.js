// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sum(a, b) {
    return a + b
}

const result = sum(3, 3);
console.log(result);




// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

const age = 30;
const results = canVote(age);
console.log(results);

