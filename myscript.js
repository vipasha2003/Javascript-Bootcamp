// Day 1 Bootcamp
// Javascript Intro and Basics

// Assignment 1: Array Operations

let fruits =[]

fruits.push("apple")
fruits.push("banana")
fruits.push("orange")

console.log(fruits)

fruits.splice(0,1)

console.log(fruits)

fruits.push("grape")

console.log(fruits)

fruits.splice(1,1,"pear")

console.log(fruits)


//Assignment 2: Object Operations

let person = {}

person.name = "John"
person.age = 30
person.city = "New York"

console.log(person)

delete person.age

console.log(person)

person.job = "Engineer"
person.city ="San Francisco"

console.log(person)


//Assignment 3: Array of Objects Operations

let cars = []

cars.push(
    {make: "Toyota",model: "Camry",year: 2018},
    {make: "Toyota",model: "Camry",year: 2018},
    {make: "Toyota",model: "Camry",year: 2018}
)

console.log(cars)

cars.splice(0,1)

console.log(cars)

cars.push(
    {make: "Honda",model: "Civic",year: 2020}
)

console.log(cars)

cars[1].model= "Accord"

console.log(cars)

