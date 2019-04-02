
/*
    Author: your name here
    Name: main.js
    Purpose: Entry point of our application
*/
// import createCar from "./createCar"  //factory function


// const garage = []

// // Create two cars using the function you imported
// const mustang = createCar("Ford", "Mustang")
// const accord = createCar("Honda", "Accord")

// // Drive the cars for a while
// // console.log(mustang.drive("the grocery store"))
// // console.log(accord.drive("Indianapolis"))

// // Park the cars in the garage
// garage.push(mustang)
// garage.push(accord)

// console.table(garage);
/*
    Author: your name here
    Name: main.js
    Purpose: Entry point of our application
*/
import carFactory from "./createCar"
import garage from "./garageFactory"

// Create two cars using the function you imported
const mustang = carFactory("Ford", "Mustang")
const accord = carFactory("Honda", "Accord")
const santafe = carFactory("Hyundai", "Santa Fe")
const sierra = carFactory("GMC", "Sierra")

/// Store the cars in the garage
garage.store(mustang)
garage.store(accord)
garage.store(santafe)
garage.store(sierra)

console.table(garage.getInventory())
console.table(garage.retrieve(sierra))