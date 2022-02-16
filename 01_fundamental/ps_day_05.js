// ARRAY UNION
let arr1 = [1, 4, 6, 2, 9]
let arr2 = [5, 2, 7, 9]

function arrayUnion (arr1, arr2) {
    return [ ... new Set([...arr1, ...arr2]) ].sort()
}

const unionArray = (arr1, arr2) => [...new Set([...arr1, ...arr2])].sort()

// console.log(arrayUnion(arr1, arr2))
// console.log(unionArray(arr1, arr2))

function union(arr1, arr2) {
    const obj = {}
   
    for (let i = arr1.length - 1; i >= 0; i--){
       obj[arr1[i]] = arr1[i]
    }

    console.log("after loop 1: ", obj)
    
    for (let i = arr2.length - 1; i >= 0; i--){
        if (obj[arr1[i]]) continue

        obj[arr2[i]] = arr2[i]
    }
    console.log("after loop 2: ", obj)
   
    return Object.values(obj)
}
// let result = (union(arr1, arr2)) 
// console.log(result)

// let student = {}
// student["name"] = "alee"
// student["age"] = 19
// console.log(student)

// remove duplicate element inside an array 
let numb = [1, 2, 2, 4, 5, 6, 6, 7]
let result = []
for (let i = 0; i < numb.length; i++) {
    if (numb[i] !== numb[i + 1]) {
        result.push(numb[i])
    }
}

console.log(result)

// QUIZZ
// let even = [2, 4, 6, 8, 10]
// console.log(even[2]) // 6
// console.log(even[8]) // undefined
// console.log(even.length) // 5

// even[10] = 9
// console.log(even.length)
// console.log(even[9])

// let odd = new Array(10).fill(1)
// console.log(odd.length)
// console.log(odd)

let hello = "hello"

function printData () {
    let name = "ale"
    console.log("mangowal")
    console.log("I Love Dancing")
    console.log("BLINK")
    console.log(name)
    console.log(hello)
}

// console.log(name)

console.log(hello)
console.log(hello*2)

function isPlaindrom (inputStr) {
    // a
    // b
    // c
    return true
}

isPlaindrom("madam")
isPlaindrom("hello")