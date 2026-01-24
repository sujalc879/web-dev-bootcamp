// Write a function that takes a user as an input and greets them with their name and age

const user = {
    name : "harshal",
    age : 35
}

function greet(userObj) {
    console.log("Wellcome to india " + userObj.name + " & Your Age is " + userObj.age);
    
}

greet(user);


// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function canVote(age) {
    if (age >= 18) {
        console.log("you are allowed to vote");
        
    } else {
        console.log("you are not allowed to vote");
        
    }
}

function greets(userObj) {
    if (userObj.gender === "male") {
        console.log("Hi Mr " + userObj.name + ", your age is " + userObj.age);
        canVote(userObj.age);
    } else {
        console.log("Hi Mrs " + userObj.name + ", your age is " + userObj.age);
        canVote(userObj.age);
    }
}

const users = {
    name : "sujal",
    age : 34,
    gender : "male"
}

greets(users);