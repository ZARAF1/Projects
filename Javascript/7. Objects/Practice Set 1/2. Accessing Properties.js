let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code belo

let crewCount=spaceship.numCrew; // using dot notation
let planetArray=spaceship.flightPath; // using dot notation
let desiredFuel=spaceship['Fuel Type']; // using bracket notation
let spaceshipColor= spaceship['color'];
console.log(crewCount);
console.log(planetArray);
console.log(desiredFuel);
console.log(spaceshipColor);

console.log(spaceship['flightPath'])
console..log()