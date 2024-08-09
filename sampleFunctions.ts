// just like variables functions in typescript are also "TYPED"
// good practice - always annotate the return type 🙌🙌🙌🙌🙌🙌
function addNumbers(a: number, b = 0): number {
  return a + b;
}

addNumbers(1000, 5);

// 👆👆👆👆
// optional parameter or optional property
// unspecified argument
// default value - changes in the type of argument
