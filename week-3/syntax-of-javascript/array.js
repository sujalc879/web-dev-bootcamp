// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function isEven(arr) {
    const newArr = arr.filter((val) => {
        return val % 2 == 0;
    });
    return newArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const result = isEven(arr);
console.log(result);












// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

                // &&

// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male



function canVote(userArr) {
    let newUser = userArr.filter((val) => {
        return val.age > 18 && val.gender === "male";
    })

    return newUser;
}

const userArr = [{
    name : "sujal",
    age : 23,
    gender : "female"
}, {
    name : "harshal",
    age : 2,
    gender : "female"
}, {
    name : "pravin",
    age : 45,
    gender : "male"
}];

const results = canVote(userArr);
console.log(results);
