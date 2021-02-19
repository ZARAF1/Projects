/*
Getters
Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method:

    const person = {
        _firstName: 'John',
        _lastName: 'Doe',
        get fullName() {
            if (this._firstName && this._lastName){
                return `${this._firstName} ${this._lastName}`;
            } else {
                return 'Missing a first name or a last name.';
            }
        }
    }

// To call the getter method:
person.fullName; // 'John Doe'
Notice that in the getter method above:

    We use the get keyword followed by a function.
We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
    We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
    In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
    Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

    Getters can perform an action on the data when getting a property.
    Getters can return different values using conditionals.
    In a getter, we can access the properties of the calling object using this.
    The functionality of our code is easier for other developers to understand.
    Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.

    Great, let’s go getter!

    Instructions
1.
In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

                                                                                                            Checkpoint 2 Passed

Stuck? Get a hint
2.
Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

    Make sure you return the string and not logging it to the console.

    Checkpoint 3 Passed

Hint
When we use the typeof operator on a variable will return a string that contains the name of the data type. If the string is 'number' then the variable is a number datatype.

    let test = 42
typeof test // 'number'
3.
If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.

    Add an else statement that returns 'System malfunction: cannot retrieve energy level'.

    Checkpoint 4 Passed

Stuck? Get a hint
4.
Log the result of calling the getter method energyLevel on robot to the console.

    Notice that the method will return a formatted response rather than just accessing a property!
*/

/*
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel (){
        if(typeof this._energyLevel==='number'){ // we can also use this expression in a condition woaah
            return `My current energy level is ${this._energyLevel}`
        }
        else{
            return 'System malfunction: cannot retrieve energy level'
        }
    }

};
console.log(robot.energyLevel)
*/

// another example
const person={
    _firstName:'Zulfiqar Ali',
    _lastName:'Raffad',
    get fullName(){
    if (this._firstName && this._lastName){
    return `${this._firstName} ${this._lastName}`
}else{
        return 'Either first or last name is missing';
    }
    }
}
console.log(person.fullName);

// another example
let hotel={
    _name:'Quay',
    _totalRooms:100,
    bookedRooms:45,
    get availableRooms(){
        return this._totalRooms - this.bookedRooms;
    }
}
console.log(hotel.availableRooms)