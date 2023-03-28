// var Vs let Vs const 


// In javascript, you can create/declare variables using keywords var, let, and const.
// Let’s see the differences between these keywords to have a better understanding of what to use and where.


//🍜 Scope -> Scope essentially means where these variables are available for use. There are two types of scopes in JS:
// 1. Function Scope: Visibility is limited to the function.
function myFn() {
    var x = 10;
    console.log(x); //prints 10
}
console.log(x); // ReferenceError: x is not defined



// 2. Block Scope: Visibility is limited to the block of code.
if (true) {
    let x1 = 10;
    console.log(x1); //prints 10
}
console.log(x1); // ReferenceError: x is not defined


` Now, that we have idea of scope. We can discuss the scope of var, let and const =>
     var declarations are function scoped.
     let declarations are block scoped.
     const declarations are block scoped.
 `





 `🍜Redefining and Redeclaring feature 🍜`

// var ::- A variable declared using ‘var’ can be redefined and even redeclared anywhere throughout its scope.
var x = 30;
console.log(x); //prints 30
x = "Hi"; //redefining or re-assigning (works without any error)
console.log(x); //prints "Hi"
 
var y = 10;
console.log(y); //prints 10
var y = "Hello"; //Redeclaring (works without any error)
console.log(y) //Prints "Hello"


//let ::- A variable declared using ‘let’ can be redefined within its scope but cannot be re-declared within its scope.
let a = 11;
console.log(a); //prints 11
a = "IB"; //works without any error
console.log(a); //prints "IB"

let b = 12;
console.log(b); //prints 12
let b= "Scaler"; // error: Identifier y has already been declared

let z = 13;
if(true){
   let z = "Fun"; //works without any error as scope is different.
   console.log(z) //prints "Fun"
}
console.log(z) //prints 13



//const ::- A variable declared using ‘const’ cannot be redefined or re-declared within its scope. 
const x = 10;
console.log(x); //prints 10
x = 11; // error: Assignment to constant variable.

const y;
y = 2; //error : Every const declaration must be initialized at the time of declaration.

const z = 12;
console.log(z) //prints 12
const z= 13; // error: Identifier 'y' has already been declared



// 🍜Hoisting

// Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.


 
`Variables declared using var are hoisted to the top of their scope and initialized with a value of undefined(special type).
Variables declared using let are hoisted to the top of their scope but are not initialized with any value.
Variables declared using const are hoisted to the top of their scope but are not initialized with any value.`
 

 

console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100

console.log(y); //Reference error  : Temponal Dead Zone
let y = 200;
console.log(y); //prints 200

console.log(z); //Reference error
const z = 300;
console.log(z); //prints 300
 
