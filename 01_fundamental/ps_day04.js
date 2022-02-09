// BUILD-N METHODS
// Array.prototypes.map()
// let arrayOfInt = [2, 4, 6, 8, 10]

// // modified the value inside arrayOfInt
// let updatedArray = arrayOfInt.map((item) => item * item)
// console.log("before : ", arrayOfInt)
// console.log("after : ", updatedArray)

// // CLONE FUNCTION FROM MAP()
// function fakeMap (arr, callback) {
//     let arrOutput = new Array(arr.length)
//     for (let i = 0; i < arr.length; i++) {
//         arrOutput[i] = callback(arr[i])
//     }

//     return arrOutput
// }

// let result1 = fakeMap([1, 3, 5, 7], (item) => {
//     return item * 3
// })
// console.log(result1)

// OBJECT.keys() / .values()
let car = {
    name : "Tesla",
    year : 2019,
    price : 1000,
    electric :true 
}

console.log(Object.values(car))
console.log(Object.keys(car))

// acess value inside an object
// 1. dot notation
console.log(car.name)
console.log(car.year)

// 2. array notation
console.log(car["name"])
console.log(car["price"])

// special iteration methods for an object
for (let key in car) {
    console.log("key : ", key)
    console.log("values : ", car[`${key}`])
}

function cloneObjectKeys (obj) {
    let output = []
    for (let key in obj) {
        output.push(key)
    }

    return output
}

let result = cloneObjectKeys(car)
console.log(result)