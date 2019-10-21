let num = 257.129

// console.log(num.toFixed(2))

// console.log(Math.round(29.9));
// console.log(Math.floor(29.9));
// console.log(Math.ceil(29.9));

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//console.log(randomNum)

let guessingGame = function(guess){
    let min = 0
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1))
    console.log(randomNum)
    console.log(guess)
    return guess == randomNum
}

console.log(guessingGame(2))