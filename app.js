
const name = "Amanda Parrott";
const words = name.split(" ");
// console.log(words[0]);



//original function
// function favMovie(name = 'Tommy Wiseau',movie = 'The Room') {
//     console.log(`My name is ${name}, and my favorite movie is ${movie}.`);
// };

//ES6 arrow function
// favMovie = (name = 'Tommy Wiseau', movie = 'The Room') => {
//     console.log(`My name is ${name}, and my favorite movie is ${movie}.`)
// };

//ES6 arrow function, concise body shorthand
favMovie = (name = "Tommy Wiseau", movie = "The Room") =>
  console.log(`My name is ${name}, and my favorite movie is ${movie}.`);

//new arrow function getFirstName
getFirstName = (name) => {
  console.log(words[0]);
};

// //create arrow function getfirstNameConcise
getFirstNameConcise = (name) => console.log(words[0]);

//doMath function
doMath = (x, y) => {
     let exp = Math.pow(x, y);
     let prod = x * y;
     console.log(`Exponent: ${exp}, Product: ${prod}`);
};

newFunc = (name, location, favFood) => console.log(`Name: ${name}, Loc: ${location}, Food: ${favFood}`);

let info = ["Amanda", "Birmingham", "Cheese"];

let myName = 'Amanda';

finalFunc = (parameter) => {
    let spread = [...parameter];
    for (let i = 0; i < parameter.length; i++) {
        console.log(spread[i]);
    };
};

//run functions

// favMovie('Stardust');
// favMovie('Amanda', 'Stardust');


favMovie();
getFirstName('Amanda Parrott');
getFirstNameConcise('Amanda Parrott');
doMath(4, 7);
newFunc(...info);
finalFunc(myName);
