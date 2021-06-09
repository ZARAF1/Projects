// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// using Luhn algorithm
// double every other number apart from check digit i.e., the last digit
const validateCreditCard = arr =>{
    let doubledArr=[];
    for (let i=0;i<arr.length;i++){
        if (i!==arr.length-1){
            if (i%2===0){
                doubledArr.push(arr[i]*2)
            }
            else if (i%2===1){
                doubledArr.push(arr[i])
            }

        }
        else if (i===arr.length-1){
            doubledArr.push(arr[i])
        }

    }
    console.log(doubledArr)


    // subtract 9 from numbers greater than 9

    let subtractedArr=[]
    for (let j=0;j<doubledArr.length;j++) {

        if (doubledArr[j] > 9){
            subtractedArr.push(doubledArr[j]-9)
        }
        else{
            subtractedArr.push(doubledArr[j])
        }

    }
    console.log(subtractedArr)

// sum up all numbers

    let arrSum=subtractedArr.reduce((acc,currentVal)=>{
        return acc+currentVal;
    })

    console.log(arrSum)

    if (arrSum%10===0){
        return true;
    }
    else{
        return false;
    }

}
// checking arrays to determine if code works

validateCreditCard(valid5)



// finding invalid card from batch array

const findInvalidCards =arr=>{
    let newArr= arr.filter(element=>{
            if (validateCreditCard(element)===false){
                return element;
            }
        }
    )
    return newArr;
    console.log(newArr.length)
}
let invalidCards=findInvalidCards(batch)
console.log(invalidCards)
// find companies that issued invalid cards

const idInvalidCardCompanies =arr=> {
    let newArr = arr.map(element => {
        if (element[0] === 3) {
            return 'Amex'
        } else if (element[0] === 4) {
            return 'Visa'
        } else if (element[0] === 5) {
            return 'MasterCard'
        } else if (element[0] === 6) {
            return 'Discover'
        } else {
            console.log('Company  Not Founded')

        }
    })
    return newArr;
}

// get unique elements in invalidCardCompanies

const getUniqueArray = arr=>{
    let uniqueArr=[];
    for (i=0;i<arr.length;i++){
        if (uniqueArr.indexOf(arr[i])===-1){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr;
}

let invalidCardCompanies = idInvalidCardCompanies(invalidCards)
console.log(invalidCardCompanies)

console.log(getUniqueArray(invalidCardCompanies))
