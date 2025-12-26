//function
// function names(){
//     console.log('hey this is abi')
// }
// names();
// names();
// names();

//examples for function:
// function add(a,b){
//     console.log(a+b);
// }
// add(2,3);


//Write a function that takes a number and prints whether it is Even or Odd.
// function evenorodd(n){
//     if(n % 2==0){
//         console.log('even')
//     }else{
//         console.log('odd')
//     }
// }
// evenorodd(4);



// //Write a function that takes a number and returns its square.
// function square(n){
//     return n*n
// }
// let result = square(6);
// console.log(result);


// //greeting function
// //Write a function that takes a name as input and prints a greeting message.
// function greeting(name){
//     console.log(`hey ${name} welcome to the function`)
// }
// greeting('abi');




//default parameter
// function name( myname='guest'){
//     console.log(`hello welcome ${myname}`)
// }
// name();



//default variable 
// let name = null || 'akshu'
// console.log(`hey my name is ${name}`)


//return type & non-return type 
//non-return type
// function name(peru){
//     console.log('my name is ', peru);
// }
// name('abi');

// //return type 
// function add(a,b){
//     return a+b;
// }
// let result = add(2,3);
// console.log(result);


//scope 

//var - function, block, global
//var is a function scope
// function name(){
//     if(true){
//         var peru = 'abinaya';
//     }console.log(peru);
// }
// name();

//let & const are block scope 
// function blockscope(){
//     if(true){
//         let name = 'abi';
//     }console.log(name);
// }
// blockscope()

//let 
// function blockscope() {
//     if (true) {
//         let name = 'abi';
//         console.log(name);
//     } 
// }
// blockscope()

//nested
// function blockscope() {
//     const peru = 'akshu'
//     if (true) {
//         let name = 'abi';
//         console.log(name);
//         console.log(peru);
//     }
// }
// blockscope()


// //global scope 
// var globalscope = "i'm a var varbiale"
// let blockscope = 'im a let varible'
// const blockscope1 = 'im a const variable'

// console.log(window.globalscope);
// console.log(window.blockscope);
// console.log(window.blockscope);


//scope chain 
var a = 10;
let b = 20;
const c = 30;
function parent(){
    // var a = 100;
    // let b = 200;
    // const c = 300;
    console.log(a+b+c);
    child();
    function child(){
        // var a = 20;
        // let b = 50;
        // const c = 90;
        console.log(a + b + c);
    }
}
parent();