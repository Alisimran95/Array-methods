const array = [41,33,10,44,20];
//filter find every some;

//Filter custom function main 

// const mainFilter = (arr,callbackFunction) =>{
//     const finalArray =[];

//     if (arr.length > 0) {
//         for (let i = 0; i < arr.length; i++) {
//             if (callbackFunction(arr[i])) {
//                 finalArray.push(arr[i]);
//             }
//         }
//         return finalArray;
//     }
//     else{
//         return "Array is Empty, try again";
//     }
// }

// console.log(mainFilter(array,x => x < 20));
// console.log(mainFilter(array,x => x > 20));


//Find custom function

// const customFind = (arr,callbackFunction) =>{
//     let emptyArray = [];
//     if (arr.length > 0) {
//         for (let i = 0; i < arr.length; i++) {
//             if (callbackFunction(arr[i])){
//                 emptyArray.push(arr[i])
//             }
//         }
//
//         return emptyArray[0];
//     }
//     else{
//         return "Array is Empty ,try new array ";
//     }
// }
//
// console.log(customFind(array,x => x<10));
// console.log(customFind(array,x => x>10));



//Custom every function
//
// const customEvery = (arr,callbackFunction) => {
//     let emptyArray = [];
//
//     if (arr.length > 0){
//         for (let i = 0; i < arr.length; i++) {
//             if (callbackFunction(arr[i])) {
//                 emptyArray.push(arr[i]);
//             }
//         }
//         if (emptyArray.length === arr.length){
//             return true;
//         }
//         else {
//             return  false;
//         }
//     }
//     else{
//         return "Array is empty";
//     }
// }
//
// console.log(customEvery(array,x => x>5));
// console.log(customEvery(array,x => x<13));

// //Custom some function
// const customSome =(arr, callbackFunction)=>{
//     let emptyArray = [];
//     if (arr.length > 0 ){
//         for (let i = 0; i < arr.length; i++) {
//             if (callbackFunction(arr[i])){
//                 emptyArray.push(arr[i]);
//             }
//         }
//         if (emptyArray.length >= 1){
//             return true;
//         }
//         else{
//             return false
//         }
//     }
//     else{
//         return "Array is empty";
//     }
// }
// console.log(customSome(array,x=>x>20));
// console.log(customSome(array,x=>x<20));
// console.log(customSome(array,x=>x>50));


