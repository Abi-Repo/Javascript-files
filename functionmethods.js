//function methods 
//call apply bind

// let details = {
//     name : 'abi',
//     dept : 'aids',
//     friends : function(a,b){
//         console.log(a);
//         console.log(b);
//         console.log(this.dept);
//         console.log(this.name);
//     }
// }
// details.friends('akshaya', 'nithya')



// //arrow function
// var name = 'sush';
// let details = {
//     name : 'abi',
//     dept : 'aids',
//     regno : 12345,
//     friends : (a,b)=>{
//         console.log(a+b);
//         console.log(this.name);   //in arrow function "this" keyword points to global variable not inside the object variable
//     }
// }
// details.friends(3,4);



//call method 
// let detail1 = {
//     name : 'akshu',
//     age : 20,
//     dept : 'ai&ds'
// }

// let detail2 = {
//     name : 'abi',
//     age : 19,
//     dept : function(){
//         console.log(this.dept, this.name)
//     }
// }
// detail2.dept.call(detail1);



//apply method 
// let person = {
//     dept : 'cs'
// }
// let details = {
//     name : 'abi',
//     add : function(a,b){
//         console.log(a+b, this.dept);
//     }
// }
// details.add.apply(person, [23,43]);



// //bind
// let detail1 = {
//     name : 'abi',
//     dept : 'cs'
// }
// let detail2 = {
//     name : 'sangi',
//     dept : 'ai&ds',
//     next : function(a,b){
//         console.log(this.dept, this.name , (a+b));
//         return (b-a);
//     }
// }
// let result = detail2.next.bind(detail1, 100,200);
// console.log(result());  //i can use this later too




















































