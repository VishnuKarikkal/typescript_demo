// interface
interface Fruit {
  name: string;
  color: string;
}

// type Fruit = {
//   name?: string;
//   color: string;
// };

// type Fruit={
//   someotjhe:string
// }

interface Flavour extends Fruit {
  fragrance: string;
  ripe: boolean;
}

interface Someother {
  someotherProp: string;
}

let mango: Flavour = {
  // name: "Malgoa",
  color: "Yellow",
  ripe: false,
  fragrance: "no fragrance as it is not ripe",
};

let pineApple: Flavour | Someother = {
  someotherProp: "this is awesome",
};

// Type vs Interface
