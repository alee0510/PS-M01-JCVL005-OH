// no 3 : Heron's formula

// input : panjang sisi segitiga (a, b, & c)
// let a = 5 // cm
// let b = 7 // cm
// let c = 8 // cm

// let semiPerimeter = (a + b + c) / 2
// let area = semiPerimeter * ((semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))
// let areaOfTriangle = Math.sqrt(area)
// console.log("a", area)
// console.log("s", semiPerimeter)
// console.log("A", areaOfTriangle)
// console.log("A", Math.round(areaOfTriangle))

// no 4 : count vowel
// let input = "JavaScript"
// let countVocal = 0
// let foundedVocal = ""

// for (let i = 0; i < input.length; i++) {
//     // console.log(i)
//     // console.log(input.charAt(i))
//     // console.log(input[i])

//     // check huruf vocal
//     const isVowel = input[i] === "a" || input[i] === "i" || input[i] === "u" || input[i] === "e" || input[i] === "o"
//     if (isVowel) {
//         countVocal += 1
//         foundedVocal += input[i]
//     }
// }

// console.log(countVocal)
// console.log(foundedVocal)
// console.log(`There are ${countVocal} vowels (${foundedVocal}) at given String`)

// let input = "Purwadhika Digital Technology School"
// let vowel = "aiueo"
// let countVowel = 0
// let foundedVowel = ""
// let isVowel = false
// let isFoundedVowel = false

// for (let i = 0; i < input.length; i++) {
//     isVowel = vowel.includes(input[i].toLowerCase())
//     isFoundedVowel = foundedVowel.includes(input[i].toLowerCase())

//     if (isVowel && !isFoundedVowel) {
//         countVowel += 1
//         foundedVowel += input[i].toLowerCase()
//     }
// }

// console.log(`There are ${countVowel} vowels (${foundedVowel.split("").join(",")}) at given String`)

let input = "Hello World"
let reversed = ""

// reverse looping
for (let i = input.length - 1; i >= 0 ; i--) {
    reversed += input[i]
}

console.log(reversed)