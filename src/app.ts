//INTERSECTION TYPES
//..intersectiontype allows us to combine other types

type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type Elevatedemployee = Admin & Employee;

const employee1: Elevatedemployee = {
  name: "Max",
  priviledges: ["create-server", "manage-server"],
  startDate: new Date(),
};

console.log(employee1);

//Note: In the case of object types, an intersection results in the
//combination of properties of both objects, while in the case of non
// object types(like union types).. it is used only in the case of similar types
// USING THE INTERSECTION TYPE WITH NON OBJECT TYPES

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // so because only type number is
//common to both Combinable and Numeric, the Universal type is finally
//resolved to be of type number

let gith: Universal;

gith = 6;

//TYPE GUARDS

//-- Type guards helps us with Union types to know the
// exact type at run time

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: unknownEmployee) {
  console.log("Name: " + emp.name);

  if ("priviledges" in emp) {
    console.log("priviledges: " + emp.priviledges);
  }

  if ("startDate" in emp) {
    console.log("startDate: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

// INSTANCEOF type of TYPEGUARD

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Drivng a truck");
  }
  loadCargo(amount: number) {
    console.log("loading cargo..." + amount);
  }
}

type vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: vehicle) {
  vehicle.drive();

  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
}

// OR USE THE INSTANCEOF

function useVehicleA(vehicle: vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// DISCRIMINATED UNIONS
// -- A pattern that makes implementing type guards when working
// with union types easier.

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // property to describe the object
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// TYPE CASTING

// -- type casting helps you tell typescript that some value is of a
//specific type esp. when typescript is unable to detect this on its own

// Below typescript is able to deduce that it is a paragraph element and
// because we selected by an HTML element
const paragraph = document.querySelector("p"); // infers that it is an HTMLParagraphElement

// Here typescript is unable to deduce what kind of element it is
// it just infers that it is an HTMLElement
const paragraphA = document.getElementById("message-output");

// so even though this should be an input element
//typescript does not know this, so we can not access the value property
const userInput = document.getElementById("user-input")!;
// userInput.value = "Hi there";

// First Way of Doing Casting
const userInput1 = <HTMLInputElement>document.getElementById("user-input")!;
userInput1.value = "Hi there";

// Second Way of Doing Casting

const userInput2 = document.getElementById("user-enter")! as HTMLInputElement;

userInput2.value = "casted successfully";

// INDEX TYPES

// -- Index types allows us to create objects which are
// are more flexible regarding the kind of properties they hold

interface ErrorContainer {
  [prop: string]: string;
}
//So with index properties we do not need to know which property names
// we are going to need or the number of properties
const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character",
};

//FUNCTION OVERLOADS

type CombinableA = string | number;
type NumericA = number | boolean;

type UniversalA = Combinable & Numeric;

function addA(a: number, b: number): number; // function overload
function addA(a: string, b: string): string; // another function overload
function addA(a: string, b: number): string; // another function overload
function addA(a: number, b: string): string; // another function overload
function addA(a: CombinableA, b: CombinableA) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Shwarz"); // Typescript is unable to tell the return type, so we do not have intellisese whern we call string
//methods like
//split();

// OPTIONAL CHAINING

const fetchData = {
  id: "ul",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchData?.job?.title);

// NULL COALESCING
