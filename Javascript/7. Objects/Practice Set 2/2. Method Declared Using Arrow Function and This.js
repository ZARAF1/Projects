/*const robot = {
    energyLevel: 100,
    checkEnergy:()=>{
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot.checkEnergy();*/

// refactor above code because this cannot be used inside method created using arrow functions

const robot = {
    energyLevel: 100,
    checkEnergy () {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot.checkEnergy();