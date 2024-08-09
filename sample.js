const imCapableOfSummingUP = (a, b) => a + b;

console.log(imCapableOfSummingUP(122, 221)); // wow that works!

console.log(imCapableOfSummingUP(55, "55")); // totally, unexpected!

console.log(imCapableOfSummingUP(41, true)); // 🤔🤔🤔!!!

console.log(imCapableOfSummingUP(54)); //🤔🤔🤔

console.log(imCapableOfSummingUP()); //🤔🤔

console.log(
  imCapableOfSummingUP(
    () => {},
    () => {}
  )
); //🤔🤔
