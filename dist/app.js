"use strict";
var _a;
const employee1 = {
    name: "Max",
    priviledges: ["create-server", "manage-server"],
    startDate: new Date(),
};
console.log(employee1);
let gith;
gith = 6;
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("priviledges" in emp) {
        console.log("priviledges: " + emp.priviledges);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
}
printEmployeeInformation({ name: "Manu", startDate: new Date() });
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Drivng a truck");
    }
    loadCargo(amount) {
        console.log("loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(1000);
    }
}
function useVehicleA(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
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
const paragraph = document.querySelector("p");
const paragraphA = document.getElementById("message-output");
const userInput = document.getElementById("user-input");
const userInput1 = document.getElementById("user-input");
userInput1.value = "Hi there";
const userInput2 = document.getElementById("user-enter");
userInput2.value = "casted successfully";
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character",
};
function addA(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Max", "Shwarz");
const fetchData = {
    id: "ul",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
console.log((_a = fetchData === null || fetchData === void 0 ? void 0 : fetchData.job) === null || _a === void 0 ? void 0 : _a.title);
//# sourceMappingURL=app.js.map