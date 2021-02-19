const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1

    // 1 has been added because the math.random method can also generate 0 which is not a part of the dice.
    let die1 = Math.floor(Math.random() * 6) + 1
    let die2 = Math.floor(Math.random() * 6) + 1
    console.log(die1)
    console.log(die2)
    return die1 + die2
}
rollTheDice()