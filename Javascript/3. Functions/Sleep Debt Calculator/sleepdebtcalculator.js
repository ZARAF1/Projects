// sleep hours per day
let getSleepHours = day => {
    day=day.toLowerCase();
    switch (day){
        case 'monday': return 5;
            break;
        case 'tuesday': return 6;
            break;
        case 'wednesday': return 7;
            break;
        case 'thursday': return 4;
            break;
        case 'friday': return 5;
            break;
        case 'saturday': return 7;
            break;
        case 'sunday': return 3;
            break;
        default: return 'invalid day'
            break;
    }
}
// actual sleep hours
let getActualSleepHours= () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');



// get Ideal Sleep Hours

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7
}


// calculate sleep debt
let calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours===idealSleepHours){
        console.log('your sleep debt is '+ (idealSleepHours - actualSleepHours)  + ' hours you slept perfectly')
    }
    else if (actualSleepHours>idealSleepHours){
        console.log('your sleep debt is '+ (idealSleepHours - actualSleepHours)  + ' hours you got more sleep than needed')
    }
    else{
        console.log('your sleep debt is '+ (idealSleepHours - actualSleepHours) + ' hours get some more rest!')
    }
}

calculateSleepDebt();

