//fetch api 
//it helps to fetch the data from the server
//Fetch the users Loop through the data Print username of each user in the console
// fetch("https://fakestoreapi.com/users")
// .then(response => response.json())
// .then(users => {
//     users.forEach(user => {
//         console.log(user.username)
//     });
// }).catch(error => console.log(error))


// //another example 
// fetch("https://fakestoreapi.com/users/afhska")
// .then((response)=>{
//     if(!response.ok){
//         throw new Error('data not found')
//     }else{
//         return response.json();
//     }
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error.message);
// })

async function fetchdata() {
    try{
        let response = await fetch('https://fakestoreapi.com/users/')
        if(!response.ok){
            throw new Error('data not found')
        }else{
            let data = await response.json()
            console.log(data)
        }
    }catch(error){
        console.log(error.message)
    }
}
fetchdata();





















