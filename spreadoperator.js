//spread operator - merging arrays
// let names = ['abinaya', 'sush', 'akshu']
// let name1 = ['nithya', 'isu']
// let newarr = [...names, ...name1]
// console.log(newarr);


//why we have to do it in this way
// let names = ['abinaya', 'akshu', 'sush']
// let newarr = names
// console.log(newarr); //becaue it affects both the names and the newarr
// newarr[0] = 'me';
// newarr[1] = 'chicken'
// console.log(newarr)
// //now i check names - it also changed
// console.log(names);



//spread operator
// //Merge two arrays [1, 2, 3] and [4, 5, 6] using the spread operator.
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let newarr = [...arr1, ...arr2]
// console.log(newarr);


// // Create a copy of an object { name: "Abi", age: 20 } and add a new property role: "AI Student" using the spread operator.
// let details = {
//     name : 'abi',
//     age : 20
// }
// let newdetails = {...details, role : "AI Student"}
// console.log(newdetails);



//rest operator or rest paramater
// function arrays(a,b,...arr){
//     console.log(a)
//     console.log(b)
//     console.log(arr)
// }
// arrays(1,2,3,4);



// //Create a function that accepts multiple numbers using the rest operator and returns their sum.
// function arrays(...arr){
//     let temp = 0;
//     for (let iterator of arr){
//         temp = temp + iterator;
//     }
//     return temp;
// }
// let reuslt = arrays(1,2,3,4);
// console.log(reuslt);


// //rest operator
// let arr = [1,3,4,4,3,2,5,2533,4,223]
// let [a,b,c,d,...e] = arr;
// console.log(a,b,c,d)
// console.log(e);


//Destructure the object { name: "Abi", age: 20, role: "Student" } and store name and role in separate variables
// let details = {
//     name : 'Abi',
//     age : 20,
//     role : "Student",
// }
// let {name,role} = details
// console.log(name, role)

