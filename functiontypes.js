//function types 

//named function
// function name(){
//     console.log('this is named function')
// }
// name();

// //anonymous function
// let anonymous = function (){
//     console.log('this is anonymous function')
// }
// anonymous();

// //arrow function
// let arrow = ()=>{
//     console.log('this is arrow function')
// }
// arrow()



//higher order function
// function fun1(){
//     console.log('hey naanthan da, nanthan')
// }
// function fun2(){
//     console.log('anna enna vutrunga na')
// }
// fun1(fun2());


//callback function
function add(callback, a , b){
    console.log(a+b);
    callback(12,10)
}
function sub(num1, num2){
    console.log(num1-num2)
}
add(sub, 2,3)