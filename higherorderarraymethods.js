//higher order array methods

//foreach
// let arr = ['abi', 'akshu', 'nithya', 'sush']
// arr.forEach( ele => {
//     console.log(ele,'is strong, brave and confident')
// })

//Use forEach() to print each element of the array
// let arr = [1, 2, 3, 4, 5]
// arr.forEach( ele => {
//     console.log(ele);
// })


// //Given[10, 20, 30, 40], use forEach() to calculate the sum of all elements.
// let arr = [10, 20, 30, 40];
// var temp = 0;
// arr.forEach(ele =>{
//     temp = temp + ele;
// })
// console.log(temp);


// //map method
// //Use map() to create a new array where each number in [1, 2, 3, 4] is doubled.
// let arr = [1,2,3,4];
// let newarr = arr.map( ele =>{
//     return ele + ele;
// })
// console.log(newarr);


//map method
//Given ["abi", "ma"], use map() to convert each string to uppercase.
// let arr = ['abi','ma']
// let newarr = arr.map(ele => {
//     return ele.toUpperCase();
// })
// console.log(newarr);


//chaining method
// let arr = [1,2,3,2,4,5,12,34]
// let newarr = arr.map(ele=>{
//     return ele;
// }).sort().fill(5,3) //but it sorts based on the ascii values
// console.log(newarr);

// //chaining method on for-each
// let arr = [1,2,3,4,4,2,3]
// let newarr = arr.forEach(ele=>{
//     console.log(ele)
// }).sort()



//filter method
// let details =[
//     {name: "abi", age: 19},
//     { name: "akshu", age: 20},
//     { name: "abi", age: 19},
//     { name: "nithya", age: 21},
// ]
// let newarr = details.filter(ele => (ele.name == 'akshu' & ele.age == 20))
// console.log(newarr);



//filter method
//From [1, 2, 3, 4, 5, 6], use filter() to get only even numbers.
// let arr = [1, 2, 3, 4, 5, 6];
// let newarr = arr.filter(ele => (ele % 2 == 0));
// console.log(newarr);

// //find method
// //From [10, 20, 30, 40], use find() to get the first value greater than 25.
// let arr = [10, 20, 30, 40];
// let newarr = arr.find(ele => (ele>25));
// console.log(newarr);



//some method
//Check if any number in [1, 2, 3, 4] is greater than 3.
// let arr = [1, 2, 3, 4]
// let result = arr.some(ele => (ele > 3));
// console.log(result);

// //every
// //Check if all numbers in [2, 4, 6, 8] are even.
// let arr1 = [2, 4, 6, 8]
// let results = arr1.every(ele => (ele%2 ==0))
// console.log(results);



// //sort method
// //how it's happening -> //a-b => positive , a>b  - swapping
// //a-b => negative, a<b => no swapping
// let arr = [5, 2, 9, 1, 5]
// let newarr = arr.sort( (a,b)=> {return a-b})
// console.log(newarr);


//sort method
//descending
//b-a => positive - swapping
//b-a => negative - no swapping
// let arr = [10,20,30,40, true, '100']
// let newarr = arr.sort((a,b)=> {return b-a})
// console.log(newarr);


//reduce method
// //Use reduce() to sum all numbers in [1, 2, 3, 4, 5].
// let arr = [1, 2, 3, 4, 5]
// let newarr = arr.reduce((accumulator, currentele, index, totalarray)=>{
//     accumulator = accumulator + currentele;
//     return accumulator;
// },0)
// console.log(newarr);

// //Given ["a", "b", "c"], use reduce() to combine them into a single string "abc".
// let arr = ["a", "b", "c"];
// let newarr = arr.reduce((acc, ele)=> {
//     acc = acc + ele;
//     return acc;
// },'')
// console.log(newarr);





