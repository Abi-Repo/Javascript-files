//before getting into the concept let's understand what is heap and stack

// let x = 10;
// let y = x;
// x = 20;
// console.log(x,y);


// let obj1 ={
//     name : 'abi'
// }
// let obj2 = obj1;
// obj2.name = 'akshu';
// console.log(obj1, obj2);



// //deep copy
// let obj1 = {
//     name : 'abi',
//     age : 19
// }
// let obj2 = { ...obj1};
// obj2.dept = 'cs'
// obj2.age = 20;
// console.log(obj1, obj2);



// //deep copy for nested object too
// let obj1 = {
//     name : 'abinaya',
//     domain : {
//         d1 : 'ai',
//         d2 : 'ml'
//     }
// }
// let obj2 = {...obj1, domain : {...obj1.domain}};
// obj2.domain.d1 = 'full stack'
// obj2.domain.d2 = 'frontend dev';
// console.log(obj1, obj2);




// //shallow copy 
// let obj1 = {
//     name : 'abi',
//     friends : {
//         frnd1 : 'akshu',
//         frnd2 : 'sush'
//     }
// }
// let obj2 = {...obj1};
// obj2.name = 'nithya';
// obj2.friends.frnd1 = 'darlingss';
// console.log(obj1, obj2);


//stringify 
// let obj = {
//     name : 'abinaya',
//     hobby : 'coding',
//     dept : 'ai&ds'
// }
// console.log('this is the normal object ', obj)
// let result = JSON.stringify(obj);
// console.log('this is the JSON object',result);



//stringify and parsing for array 

// let arr = [1,3,4,4,[234,2,12,3]];
// let arr1 = [...arr]
// arr1[4][0] = 555;
// console.log(arr, arr1);































