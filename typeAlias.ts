// Employee object we just seen👇

// let employee: {
//   readonly name: string; // read-only property
//   age: number; // property
//   status: string;
//   greet: (message: string) => string; // method
// } = {
//   name: "Ramya",
//   age: 45,
//   status: "unspecified",
//   greet: (message) => message,
// };

//🙌🙌🙌🙌🙌
// problems - to create another employee object, new employee object can have other props too, code readability .

// DRY -  DONT👉REPEAT🤼‍♂️YOURSELF🫵

// Custom TYPE 🙌🙌🙌

export type Employee = {
  readonly name: string;
  age: number;
  status: string;
  // greet: (message: string) => string;
};

let employeeRamya: Employee; // thus making the 🫡SHAPE🫡 reusable
