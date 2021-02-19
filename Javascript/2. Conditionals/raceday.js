let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly=true;
let runnersAge=18;
if(runnersAge>18 && registeredEarly===true){
    raceNumber+=1000;
}
if (runnersAge>18 && registeredEarly===true){
    console.log(`${raceNumber} will run at 9:30AM`)
}
else if (runnersAge>18 && registeredEarly===false){
    console.log(`${raceNumber} will run at 11:00AM`)
}
else if (runnersAge<18){
    console.log(`${raceNumber} will run at 12:30PM`)
}
else {
    console.log('Visit registration desk!')
}