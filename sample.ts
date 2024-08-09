//associating a type 🙌🙌🙌🙌
let limitNumber: number;

//inferring
let kilometers = 25;
let myName = "Robby";

//ANY type - any value - bad practice - not TYPE-SAFE
let gir;
gir = 0;
gir = "po";

// TYPE-SAFE version of ANY - UNKNOWN
//they are useful when we are not sure about the shape of the variable
//Unknown requires us to refine the type before using it.
let a: unknown;
let b: number = 10,
  sum;
// sum = a + b;

// we will see NEVER as we progress ==>>

//Arrays 🙌🙌🙌🙌
let numberArray: number[];
let anotherArray = ["good", "better", "best"];

let someOtherArray = [45, "AYE!", true]; // tsc compiler infers the type ===> GUESS the type

//code completion - PRODUCTIVITY BOOSTER- typescript compiler ability
// someOtherArray.forEach((n) => {
//   if (typeof n === "string") {
//   } else if (typeof n === "number") {
//   } else {
//   }
// });

//Tuple 🙌🙌🙌🙌
// Fixed length array with each element has a particular type
//internally represented as ARRAYS
// they are useful for [key,value] pair -- more elements in the tuple doesn't make any sense
let tupleVar: [number, string] = [45, "Robin"];

//Enums are used to represent a list of related constants
const small = 1;
const medium = 2;
const large = 3;

// ==>
enum Size {
  Small,
  Medium,
  Large, // default : 0,1,2...
}

enum SizeInString {
  Small = "s",
  Medium = "m",
  Large = "l", // if assigned strings ,must provide values for all
}
