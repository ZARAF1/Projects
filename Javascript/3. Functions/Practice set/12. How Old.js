function howOld(age,year){
    let currentYear=2021;
    let birthYear= currentYear - age;
    if(year<birthYear){
        ageBeforeBirth= year - birthYear;
        return `You are ${ageBeforeBirth} in the year ${year} `
    }
    if(year>birthYear && year<currentYear){
        ageInPast=(age-(currentYear-year));
        return `You are ${ageInPast} in the year ${year}`
    }
    if(year>currentYear){
        ageinFuture=(age + (year-currentYear))
        return `You will be ${ageinFuture} in the year ${year}`
    }
}
console.log(howOld(29,2005))