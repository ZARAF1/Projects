let hotel={
    name:'Quay',
    roomTypes:{
                single:{
                    capacity:1,
                    price:50,
                    recommendations(){
                        console.log('Good for individuals')
                    }
                    },
                    lux:{
                        capacity:3,
                        price:70,
                        recommendations(){
                            console.log('Good for small families')
                    }
                    },
                    suite: {
                        capacity: 7,
                        price: 100,
                        recommendations() {
                            console.log('Good for large families')
                        }
                    }
    },

}

//getters applied on internal properties
/*
const person={
    _firstName:'Ali',
    _lastName:'Raffad',
    get fullName () {
        if(this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`
        }
        else{
            return `Either first or last name is missing`;
        }
    }
}
console.log (person.fullName)
*/


// setters on internal properties

/*
const persona={
    name: 'Zulfiqar Ali Raffad',
    _age: 54,
    set age(num){
        if (typeof num==='number'){
            this._age=num;
        }else{
            return `number is not supplied for age`
        }
    }
}
persona.age=60;
console.log(persona._age)*/
