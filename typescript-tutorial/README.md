# TYPESCRIPT PRACTISE APPLICATION 

- Below are the sample templates on how to write code usign typeScript. 

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];

- Tuple 
let role : [number, string] => fixed number of elements to be there with defined types. 

let personOne: Object; //Not recommended

type Person = {
  name: String;
  age?: number;
};

let person: Person = {
  name: "Yosephj",
  age: 26,
};

interface Student {
  name: string;
  age: number;
}

let lotOfPeople: Person[];
let ageStringNumber: string | number;

type X = {
  a: string;
  b: number;
};

type Y = X & {
  c: string;
  d: number;
};
// Here we can extend the types of X to Y and should provide the values of all a,b,c,d

- Function 
let printName : (name: string) => void; // function name - parameter it takes - return type 

let printName : (name: string) => never; // void returns undefined - never doesn't return anything. 

unknown > any type 

interface PersonI {
  name: string;
  age: number;
}

interface Guy extends PersonI {
  profession: string;
}

- void returns undefined, never doesn't return anything. 

This Application is mainly concentrated on the TypeScript requried for the React Js developer. 
