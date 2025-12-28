//hoisting 

//var 
//var a  -> it shows undefined becuase the var a is declared here but not initialised
//javascript automatically does this declaration before u run the console.log
// console.log(a)
// var a = 19;


//let 
// console.log(a);
// let a = 19;


//funciton hoisting 
// name();
// function name(){
//     console.log('hey')
// }

// //anonymous function hoisting
// console.log(name);
// var name =function (){
//     console.log('hello')
// }



// //curring function
// function name(a){
//     console.log('hey')
//     return function(b){
//         console.log("i'm abi")
//         return function(c){
//             console.log("how are u?")
//         }
//     }
// }
// // name(3)(1)(0)
// let result = name(1);
// let result2 = result(323);
// let result3 = result2(4);




// //self invoke function
// (function (){
//     console.log('hey you got a 20% dicount')
// })();

//self invoke function eg:
// (function (name, age) {
//     console.log(`hey my name is ${name} and my age is ${age}`)
// })('abinaya shanmugam', 19)


//another eg
// (function details(name, age) {
//     console.log(`hey my name is ${name} and my age is ${age}`)
// })('abinaya shanmugam', 19)
// details();



//closure function
// function outer(){
//     let count = 0;
//     return function(){
//         count ++;
//         console.log(count)        
//     }
// }
// let result = outer();
// result();
// result();
// result();


// //closure function
// function makeMultiplier(x){
//     return function(y){
//         console.log(x * y);
//     }
// }
// let result = makeMultiplier(2);
// result(3);
// result(1);
// result(2);


//generator function
// function* name(){
//     yield "abinaya";
//     yield "akshaya";
//     yield "nithya";
//     return "final val"
// }
// let result = name();
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

// //example 2 
// function* name() {
//     yield "abinaya";
//     yield "akshaya";
//     yield "nithya";
//     return "final val"
// }
// let result = name();
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);

//eg - 3
// // Create a generator function countUp(n) that yields numbers from 1 to n.
// function* countUp(n){
//     for(let i=1; i<=n; i++ ){
//         yield i;
//     }
// }
// let result = countUp(3);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);


// //eg : 4
// function* fibonaci(n){
//     let a = 0, b = 1;
//     for(let i = 0; i<=n; i++ ){
//         yield a;
//         [a, b] = [b, a+b];
//     }
// }
// let result = fibonaci(5);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);




