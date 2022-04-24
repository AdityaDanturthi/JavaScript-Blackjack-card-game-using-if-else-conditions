let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard

// if(sum < 21) {
//     console.log("Do you want to draw another card?")
// }
// else if (sum === 21) {
//     console.log("Congratulations! You have a blackjack! You won!")
// }
// else {
//     console.log("Sorry! You are out of the game.")
// }

// if less than or equal to 20 -> "Do you want to draw a new card?"
// else if exactly 21 -> "Wohoo! You've got Blackjack"
// else -> "You're out of the game!"
let hasBlackJack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
}
else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack")
    hasBlackJack = true
}
else {
    console.log("You're out of the game!")
    isAlive = false
}

console.log(hasBlackJack)
console.log(isAlive)
