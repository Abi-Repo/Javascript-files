//array
// var arr = ['abi', 'akshsaya','nithya','sush']
// console.log(arr);
// console.log(arr[1])
// console.log(arr[3])

//eg for array
// var abi = [1,2,4,2,341,34]
// for(let i= 0; i < abi.length ; i++){
//     console.log(abi[i]);
// }

//Find the sum of all elements in an array.
// var abi = [1,2,3,4,5]
// var temp = 0;
// for(let i = 0; i < abi.length; i++){
//     temp = temp + abi[i];
// }
// console.log(temp);


//Remove duplicates from an array without using Set
// var arr = [1,2,34,4,1,2,3,4];
// let temp = []
// for(let i = 0; i < arr.length; i++){
//     if(!temp.includes(arr[i])){
//         temp.push(arr[i]);
//     }
// }
// console.log(temp);


// //array constructor  - like creating on our own
// var newarray = new Array;
// newarray[0] = 'abi';
// newarray[1] = 'nithya';
// newarray[2] = 'akshu';
// console.log(newarray);


// //object
// let student = {
//     name : 'abi',
//     age : 19,
//     course : 'aids'
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);

// //another example for object
// let student = {
//     "name" : 'abi',
//     'age' : 19
// }
// console.log(student.name);
// console.log(student['name']);
// console.log(student.age)
// console.log(student);


// //short hand assigned property
// let a = 'abi'
// let b = 'akshu'
// let fun = {
//     a,
//     b
// }
// console.log(fun.a, fun.b);



// //dynamic property
// let regnum = 'enrollnumber';
// let details = {
//     name : 'abi',
//     ['regnum'] : 'tu230103110023'
// }
// console.log(details.name, details.regnum);



//for loop for string
// let name = 'akshu chellam'
// for (let i =0; i< name.length ; i++){
//     console.log(name[i]);
// }



// //for - of loop
// let names = ['abi', 'akshu','nithya'];
// for (let iterator of names){
//     console.log(iterator);
// }

// let name = 'akju'
// for (let char of name){
//     console.log(char);
// }


// //for-of loop with generator function
// function* name(){
//     yield 'abi',
//     yield  'akshu',
//     yield 'nithys'
// }
// let result = name();
// for(let iterator of result){
//     console.log(iterator);
// }


//for in loop
// let details = {
//     names : ['abi','akshu','nithya'],
//     age : [19,20,21],
//     welcome(){
//         console.log('hello everyone welcome to the world of alice and border lands')
//     }
// }
// for (let key in details){
//     // console.log(key);
//     console.log(details[key]) //for values
// }


// //for in loop
// //Use a for...in loop to print all indexes of this array:[10, 20, 30, 40]
// let arr = [10, 20, 30, 40]
// for(let key in arr){
//     console.log(key)
// }

//eg - 2 use for...in to print all keys and their values.
// let details = { name: "Abi", age: 20, role: "Student" }
// for(let key in details){
//     console.log(key,details[key]);
// }














































