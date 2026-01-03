//promise 
//resolve and reject 
// let pro = new Promise((resolve, reject)=>{
//     let given = true;
//     if(given){
//         resolve('abi is the best')
//     }else{
//         reject('she is the best and only she is the best')
//     }
// })
// pro.then((messsage)=>{  //then represents the resove message
//     console.log('the first message ' + messsage)
// }).catch((error)=>{    //catch represents the reject message
//     console.log('she is right' + error);
// }).finally(()=>{
//     console.log('she is always been the best')
// })


// //creating a promise that regjects with something went wrong after 1 second
// let rejectpro = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject('something went wrong')
//     }, 1000);
// }).catch((error)=>{
//     console.log(error)
// })


// //resolve if a number is even and rejects if a number is odd
// let conditionalpromise = new Promise((resolve, reject)=>{
//     let num = 2;
//     if(num %2 ==0){
//         resolve('hureyy the number is even')
//     }else{
//         reject('oh no lord the number is odd')
//     }
// })
// conditionalpromise.then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error);
// })



// //promise chaining 
// //resoves with a number 5 and multiplies it by 2 and add 10 and log the final result 
// var promisechain = new Promise((resolve, reject)=>{
//     var number = 5;
//     if(number == 5 ){
//         resolve(number);
//     }else{
//         reject('number is not 5')
//     }
// })

// promisechain.then((num)=>{
//     return num*2;
// }).then((num)=>{
//     return num +10;
// }).then((num)=>{
//     console.log(num);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('finally the program ends here')
// })



// //i have already told to u that, to do asynchronous we use promise
// let promise = new Promise((resolve, reject)=>{
//     let name = true;
//     if (name){
//         resolve('succes');
//     }else{
//         reject('it will get success')
//     }
// })
// let result = await promise;
// console.log(result);
// console.log('great')

// //but if you use promise without async or await
// let promise1 = new Promise((resolve, reject) => {
//     let name = true;
//     if (name) {
//         resolve('succes');
//     } else {
//         reject('it will get success')
//     }
// })
// promise1.then((message)=>
//     console.log(message)).catch((error)=>{
//         console.log(error)})

// console.log('greatest ever')  //it first runs this then it runs th promise



// //async await 
// //Create a promise that resolves with "Done" after 1 second.Use await to get the value and log it.
// let asyncpro = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('done')
//     }, 1000)
// })

// async function basic(){
//     try{
//         let message = await asyncpro;
//         console.log(message);
//     }catch(error){
//         console.log(error);
//     }
// }
// basic();












