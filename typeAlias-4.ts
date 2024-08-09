// utilities🙌🙌
// Partial , Required, Pick, Omit

// Partial🙌🙌
interface Employee {
  name: string;
  age: number;
  id: number;
} // all properties are required

let sanju: Partial<Employee> = {}; // makes all properties optional

// Required does exaclty the opposite👆 🙌🙌
interface Employer {
  companyName?: string;
}

let teena: Required<Employer> = { companyName: "katzion" };

// Pick 🙌🙌
// constructs a custom type by picking a set from other
type NewType = Pick<Employee, "name" | "id">;

let newObj: NewType = { name: "", id: 0 };

// Omit 🙌🙌
// constructs a new type by ommiting a set
type NewTypeObj = Omit<Employee, "age">;

let newTypeObj: NewTypeObj = { id: 9, name: "klassen" };
