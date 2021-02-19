// pass by reference using parameters
// you can mutate an object from within a function. the below examples shows that we created a car object having two
// properties. We then created a function that will take the name of the object as a parameter and updates the existing
// property color within the object . we then invoke the function using the function name with argument 'car'. Doing so
// we mutated(updated ) the color of car
/*
let car={
    color:'black',
    model:'ford 2000'
}
let colorTheCar = (objName) =>{
    objName.color='white';
}
colorTheCar(car);
console.log(car.color)*/




// pass by reference without parameters
/*
let car={
    color:'black',
    model:'ford 2000'
}
let colorTheCar = () =>{
    car.color='white';
}
colorTheCar();
console.log(car.color)*/


// trying to reassign the object created using const from within the fucntion but it does not work
/*const car={
    color:'black',
    model:'ford 2000'
}
let colorTheCar = (objName) =>{
    objName={color:'rose gold'}
    console.log(objName.color) // this would print updated value as it is being called from within the function
}
colorTheCar(car);
console.log(car.color)// we will see that the reassignment did not work*/


// trying to update the object created with let from within the function
/*let car={
    color:'black',
    model:'ford 2000'
}
let colorTheCar = (objName) =>{
    objName={color:'rose gold'}
    console.log(objName.color) // this would print updated value as it is being called from within the function
}
colorTheCar(car);
console.log(car.color)// we will see that the reassignment did not work*/

// regular reassignment shall work

let car={
    color:'black',
    model:'ford 2000'
}

car ={
    engine:'turbo'
}
console.log(car)