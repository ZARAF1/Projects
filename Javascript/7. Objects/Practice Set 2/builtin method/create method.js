//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
let person={
    age:50,
    _firstName:'Atom',
    _lastName:'Sandler'

}

let personTwo=Object.create(person)
console.log(personTwo)