/*
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
*/
function lifePhase(age){
    if(age<0 || age>140){
        return 'Age is not valid';
    }
    else if(age<=3){
        return 'baby';
    }
    else if(age<=12){
        return 'child'
    }
    else if (age<=19){
        return 'teen'
    }
    else if(age<=64){
        return 'adult'
    }
    else{
        return 'senior citizen'
    }
}
console.log(lifePhase(-4))