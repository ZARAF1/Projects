/*
/!*revision of all concepts*!/
// creating an object using object literals
let hotel = {
    name: 'Quay',
    rooms:50,
    bookings:15,
    'facilities available': ['gym', 'park', 'pool'], //creating an array inside an object
    'roomsAvailable'(){ // creating a method which is an anonymous function inside the oject usig ES6 latest syntax which omits : and function keyword
        return this.rooms-this.bookings;
    },
    welcomeMessage (){// creating another method
        console.log(`Welcome to ${hotel.name} hotel`);
    },
    // adding nested object
    crew:{
        ceo:{
            name:'Pepsi',
            age:55,
            designation:'CEO'
        },
        chef:{
            name:'Kitchen',
            age:55,
            designation:'head chef'

        }
            },
    'food supplies':[{// creating objecta within an array
        rice:{
        quatity:40,
            type:'basmati'
    }
},
{
    beans:{
        quantity:50,
            type:'green'
    }
}
    ]

}
// adding another key:vale

hotel.lastRenovation = 1999;
// logs
console.log(hotel['roomsAvailable']());
console.log(hotel.welcomeMessage());
console.log(hotel["facilities available"][0])


// chaining to get to the desired properties value
console.log(hotel.crew.ceo.name)
// deleting properties
console.log(hotel);
delete hotel.lastRenovation;
console.log(hotel)

console.log(hotel["food supplies"][0])*/

let spaceship={
    passengers:null,
    color:'silver',
    'passenger capacity':15,
    telescope:{
        yearBuilt:2018,
        model:'xlt',
        focalLength:2032
    },
    crew:{
        captain:{
            name:'Sandra',
            age:38,
            degree: 'computer engineering',
            encourageTeam () {
                console.log('we are here to do so we will')
            }
        }
    },
    engine:{
        model:'Nimbus 3000'

    },
    nanoelectronics: {
        computer:{
            storageInTB:1047,
            monitors:'HD'
        },
        backup:{
            storageInTB: 500,
            battery: 'lithium'
        }
    },
    'Food Supply':[
        {Rice:{quantity:100,type:'basmati'}},
        {Beans:{quantity:100,type:'green'}}
    ]

}
console.log(spaceship['Food Supply'][1])
// for in is only used to log the list the objects as under or the keys and their values
for (let values in spaceship){
    console.log(values);
    if(values==='nanoelectronics') {
        console.log(spaceship[values].computer.storageInTB)
    }
    }
for (let keys in spaceship.crew.captain){
   /* // lists the keys in captain obkject
    console.log(`${keys}`)
    // lists the values at each iteration
    console.log(spaceship.crew.captain[keys])*/
    // putting the above together
    console.log(`${keys}: ${spaceship.crew.captain[keys]}`)
}
console.log(spaceship['Food Supply'][0]);