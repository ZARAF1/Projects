/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the
elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it.
Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const sentence = ['sense.','make', 'all', 'will', 'This'];

reverseArray(sentence);

*/
// Should return ['This', 'will', 'all', 'make', 'sense.'];

// Write your code here:
let myArr=[1,2,3,4,5,6,7,8,9]
reverseArray=(arr)=>{
    let reversedArr=[];
    for (let i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i])
    }
    return reversedArr;


}
console.log(reverseArray(myArr))

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];



