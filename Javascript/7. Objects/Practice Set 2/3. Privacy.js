const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot._energyLevel='high'
robot.recharge();
// in above example we updated the _energyLevel to a string and then added 30 to it using mathematical assigment operators.
// this will print a funky text and number string. this is a side effect of type coersion in JS where

// another example
const totalCost={
    _amount:1000
}