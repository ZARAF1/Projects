// Write your function here:
function tipCalculator(quality, total){
    if (quality==='bad'){
        return total * (5/100);
    }
    else if(quality==='ok'){
        return total*(15/100);
    }
    else if(quality==='good'){
        return total*(20/100);
    }
    else if(quality==='excellent'){
        return total*(30/100);
    }
    else {

        return total*(18/100);

    }};



console.log(tipCalculator('bad',300));