// specifying object types  🙌🙌🙌🙌
let employee: {
  name: string; // read-only property
  age: number; // property
  status: string;
  greet: (message: string) => string; // method
} = {
  name: "Ramya",
  age: 45,
  status: "unspecified",
  greet: (message) => message,
};

// optional property,
employee.name = "Ramya Z"; // error
employee.age = 45;
