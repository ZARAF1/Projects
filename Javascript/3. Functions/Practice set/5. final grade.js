/*
Write a function, finalGrade(). It should: take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'

*/
function finalGrade(num1,num2,num3){
    if((num1<0 || num1>100) || (num2<0 || num2>100) || (num3<0 || num3>100)){
        return 'Invalid grade entered'
    }
    let averageGrade=(num1+num2+num3)/3;

    if(averageGrade>=0  averageGrade<60){
        return 'F';
    }
    else if(averageGrade<70){
        return 'D';
    }
    else if(averageGrade<80){
        return 'C'
    }
    else if(averageGrade<90){
        return 'B'
    }
    else {
        return 'A'
    }

}
console.log(finalGrade(80,80,80))