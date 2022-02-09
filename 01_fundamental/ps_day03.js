// STRING SORT
// 1, 2, 3, 4, 5, ... -> number bisa di bandingkan
// console.log(3 > 2) // true
// console.log(2 > 3) // false
// console.log(3 === 2) // false

// console.log("A" > "_") // false
// console.log("A" < "B") // true
// console.log("A" === "A") // true

// console.log("A".charCodeAt(0) > "a".charCodeAt(0))

// BUBBLE SORT
// let input = "java"
// console.log("before :", input)

// interasi -> selama iterasi -> membandingkan 2 value -> before & after

// check-1
// i = 0, j > a ? "swap" -> input = ajva
// i = 1, j > v ? "do not swap"
// i = 2, v > a ? "swap" -> input = ajav

// check-2
// i = 0, a > j ? "do not swap"
// i = 1, j > a ? "swap" -> input = aajv

// check-3
// i = 0, a > a ? "do not swap"

// result => aajv

// for (let i = 0; i < input.length - 1; i++) {
//     console.log("check-", i)
//     for (let j = 0; j < input.length - i - 1; j++) {
//         console.log("compare-", j)
//         let before = input[j].charCodeAt(0)
//         let after = input[j + 1].charCodeAt(0)
        
//         console.log("before", input[j], " & after", input[j + 1])
//         // do swaping
//         if (before > after) {
//             let tempstr1 = input.substring(0, j) + input[j + 1] + input.substring(j + 1)
//             let tempstr2 = tempstr1.substring(0, j + 1) + input[j] + tempstr1.substring(j + 2)
//             input = tempstr2
//         }
//         console.log(input)
//     }
// }
// console.log("after :", input)

// simple swaping example
// let input = "hello" // -> hlelo
// console.log(input.substring(0, 2)) // he
// console.log(input.substring(1)) // ello
// do swap
// 1. substring -> replace e to be l
//    "h" + "l" + "llo" -> hlllo
//    "hl" + "e" + "lo" -> hlelo
// let tempstr1 = input.substring(0, 1) + input[2] + input.substring(2)
// let tempstr2 = tempstr1.substring(0, 2) + input[1] + tempstr1.substring(3)
// input = tempstr2
// console.log(tempstr1)
// console.log(tempstr2)
// console.log(input)

// START PATTERN
// let input = 9
// let output = ""

// // *
// // * *
// // * * *
// // * * * *

// for (let row = 0; row < input; row++) {
//     // console.log("row - ", row)
//     let temp = input - row

//     // dynamic loop
//     for (let col = 0; col < row + 1; col++) {
//         // console.log("col - ", col)
//         output += `${temp + col} `
//     }

//     output += "\n"
// }

// console.log(output)

let input = 5
let output =  ""

for (let row = 0; row < input; row ++) {
    for (let col = 0; col < input; col ++) {
        if (col > input - row - 2) {
            output += "* "
        } else {
            output += "  "
        }
    }

    output += "\n"
}
console.log(output)
