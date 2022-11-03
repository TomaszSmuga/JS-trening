let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard + 25

if (sum < 21) {
    console.log("Do you want to draw another card?")
} else if ( sum === 21) {
    console.log("Wohoo! Gambling!!!")
} else {
    console.log("You are out, bum!")
}