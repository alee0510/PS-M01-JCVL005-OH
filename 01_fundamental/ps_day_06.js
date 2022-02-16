// PRIME NUMBER -> angka yang hanya habis dibagi dirinya sendiri dan angka 1
// - greater than 1
// - can be / by smaller natural number
// 2 FACTOR

function isPrimeNumber (numb) {
    if (numb <= 1) return false

    // if numb > 1
    for (let i = 2; i < numb; i++) {
        if (numb % i === 0) return false
    }

    return true
}

// console.log(isPrimeNumber(0))
// console.log(isPrimeNumber(1))
// console.log(isPrimeNumber(2))
// console.log(isPrimeNumber(3))
// console.log(isPrimeNumber(9))
// console.log(isPrimeNumber(10))

// 1, 2, 3, 4, 5
// PR : buatlah sebuah function yang dapat menampilkan bilangan prima dari retang sesuai
// input yang diberikan
// generatePrimeNumber(0, 10) --> 2, 3, 5, 7
// generatePrimeNumber(5, 9) -> 5, 7

// exponent number ?
// 6^3 = 6 * 6 * 6  = 216

function exponent (numb, exp) {
    if (exp === 0) return 1

    let result = numb
    for (let i = 1; i < exp; i++) {
        result = result * numb
    }

    return result
}

// console.log(exponent(6, 3))
// console.log(exponent(3, 3))
// console.log(exponent(5, 5))


function exponentRecVer (numb, exp) {
    if (exp === 0) return 1

    return numb * exponentRecVer(numb, exp - 1)
}

// console.log(exponentRecVer(6, 3))
// -> exponentRecVer(6, 3) -> 6 * exponentRecVer(6, 2) -> 6 * 36 -> 216
// -> exponentRecVer(6, 2) -> 6 * exponentRecVer(6, 1) -> 6 * 6 -> 36
// -> exponentRecVer(6, 1) -> 6 * exponentRecVer(6, 0) -> 6 * 1 -> 6
// -> exponentRecVer(6, 0) -> 1
// console.log(exponentRecVer(1, 0))
// console.log(exponentRecVer(5, 2))

// DATA VALIDATION -> data -> { ... }
function validation (data) {
    // 1st : username
    // - min 6 & max 13 chars
    // - doesn't include symbol [!@#$%^&*]
    let len = data.username.length
    if (len < 6 || len > 13) {
        return "username must be minimum 6 chars or maximum 13 character"
    }

    let symbol = /[!@#$%^&*_]/g
    if (symbol.test(data.username)) {
        return "username include symbol"
    }

    // 2nd : email
    // valid -> addres@host.domain -> alee0510@gmail.com
    // split() -> email berdasarkan "@" > 2 or === 1 ? bukan email, @lee@gmail.com
    // provider split () -> gmail.com -> "yahoo, outlook, gmail"
    // domain -> "net, com"
    let email = data.email.split("@") // ["alee", "gmail.com"]
    if (email.length > 2 || email.length === 1) {
        return "email doesn't valid"
    }

    let checkhost = email[1].split(".") // ["gmail", "com"]
    let host = ["gmail", "yahoo", "outlook"]
    let domain = ["com", "net"]
    if (!host.includes(checkhost[0])) {
        return "email host doesn't valid"
    }
    if(!domain.includes(checkhost[1])) {
        return "email domain doesn't valid"
    }

    return "data is valid"
}

console.log(validation({ username : "alee05", email : "alee@yahoo.net" }))

// let str = "hel_lo"
// // console.log(str.includes("abcd"))
// const regex = /[!@#$%^&*_]/g
// console.log(regex.test(str))