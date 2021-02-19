let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};
let capFave = spaceship.crew.captain['favorite foods'][0];
// updating passengers as an array of objects having sub objects
spaceship.passengers=[
    {'pass1':{
            name:'quintox',
            age:45
        }},
    {'pass2':{
            name:'bright',
            age:31
        }}

]
const firstPassenger = spaceship.passengers[0]
console.log(firstPassenger)


// another example

let hotel = {
    name:'Quay',
    rooms:45,
    facilities:null
}
console.log(hotel.facilities)
hotel.facilities=[
    {pool:{water:'cold',capacity:50}},{gym:{
            type:'mens',
            capacity:100,
        }
    }
]
console.log(hotel.facilities[0])