function greet(){
    console.log(`Hello ${this.name}, you are ${this.age} years old.`)
}



const person1 = {
    name: "Mila",
    age: 34,
    greet: greet
};

// let person2 = {
//   name: "Nina",
//   age: 38
// //   greet: greet

// }

console.log(person1.greet());
