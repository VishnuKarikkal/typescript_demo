import { Employee } from "./typeAlias";

// UNION Type🙌🙌
//specifies a variable is one of many types

// | : "OR"
let isItTruthy: boolean | string;
//                      OR
isItTruthy = true;
isItTruthy = "Somewhat truthy!";
isItTruthy = "Dont know";
// used to create LITERALS - specific valued variables

let index: 0 | 1; // can hold values 0 OR 1 only
//👇
// type IndexValue =0|1
// let index:IndexValue
let metric: "cm" | "m";

// also used to create NULLABLE variables
let greeting: string | null;
greeting = "HI!";
greeting = null;

// INTERSECTION Type🙌🙌🙌
//combines types with AND
// & : "AND"

type Employer = {
  companyName: string;
};

let nahyan: Employee & Employer = {
  name: "Nahyan",
  age: 25,
  status: "",

  companyName: "KATZION",
};

//👉👉 UNION version
let sanmay: Employee | Employer = {
  name: "Sanmay",
  age: 25,
  status: "Learning",
  // doesn't require properties from both
};

let teena: Employer | Employee = {
  companyName: "KATZION",
};

let visak: Employer | Employee = {
  name: "Visak",
  companyName: "GLOBAL-KATZ",
};

// NEVER type🙌🙌🙌

// is this possible ??!!👇
type ThisMakesNoSense = number & string; //???

let someVariable: ThisMakesNoSense; //???

//another NEVER scenario
function format(value: string | number) {
  if (typeof value === "string") {
    return value.trim();
  } else {
    return value.toFixed(2); // we're sure it's number
  }

  // not a string or number
  // "value" can't occur here, so it's type "never"
}
