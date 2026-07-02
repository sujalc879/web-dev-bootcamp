// function greet(firstName: string):string {
//     return "wellcome " + firstName;
// }

// const ans= greet("sujal");
// console.log(ans);


// function sum(a:number, b:number):number {
//     return a + b;
// };

// const ans = sum(2, 4);

// console.log(ans);


// write a function first_element
// that taks an array as input,
// returns the first element if it exists.
// if it doesnt exist, then returns null

// function first_element(arr:number[]): number | null {
//     if (arr.length === 0) {
//         return null;
//     } else {
//         return arr[0] ?? null;
//     }
// }

// const ans = first_element([1, 2, 3]);

// console.log(ans);




// return true if the user is 18+

// function isLegal(age: number) {
//     return age > 18 ? true : false;
// };

// const ans = isLegal(2);

// console.log(ans);




// create a function that takes another function as a input & runs it after 1 second

// function before(fn: () => void) {
//     setTimeout(() => {
//         fn();
//     }, 1000 * 1);
// };

// function after() {
//     console.log("1 second has passed");
    
// }

// before(after)

