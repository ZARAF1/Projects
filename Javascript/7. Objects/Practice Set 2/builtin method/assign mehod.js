// .assign() method
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
}
let newRobot=Object.assign(robot);
console.log(newRobot)

const target = { a: 1, b: 2, c:6,d:9};
const source = { b: 4, c: 5 };

Object.assign(target, source);
//or assign it to a variable
const returnedTarget = Object.assign(target,source);
    console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 } // overwrites target if same key exists

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }// overwrites target if same key exists


//
