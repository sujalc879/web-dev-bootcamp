// function greet(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// }

// const ans = greet({name : "sujal", age : 7});

// console.log(ans);

// type Person = { name: string; age?: number }

// function greet(person: Person) {
//   return "Hello " + person.name;
// }

// const person1: Person = {
//     name : "sujal Bhau"
// }

// const ans = greet(person1)
// console.log(ans);

type Shape = {
    name: string

    calculateArea(): void
};

class Rectangle implements Shape {
    name: string = "sujal"
    calculateArea(): void {
        console.log("hii sujal");
        
    }
}

console.log(new Rectangle());
