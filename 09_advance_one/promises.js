 const promiseOne=new Promise(function(resolve, reject){ //promise creation
    //do an async task
    //db calls, cryptography, network call
    setTimeout( function(){
        console.log('async task is completed')
        resolve()
    },1000)
 })

 promiseOne.then(function(){
    console.log('promise consumed')
 })                         //.then() has connection with resolve




 //
new Promise(function(resolve,reject){
   setTimeout(function(){
      console.log('async task 2')
      resolve()
   },100)
}).then(function(){
   console.log('async 2 resolved')
})




//
const promiseThree=new Promise(function(resolve, reject){
   setTimeout(function(){
      resolve({username:'chauhan' , email:'rajput@.com'})  //we can also pass objects in resolve
   },1000)
})
promiseThree.then(function(user){
        console.log(user)
})



//
const promiseFour=new Promise(function(resolve, reject){
   setTimeout(function(){
      let error=false
      if(!error){
         resolve({user:'sanya', age:20})
      }else{
         reject('error: something went wrong')
      }
   },1000)
})

promiseFour.then((use)=>{
   console.log(use)
   return use.user
}).then((us)=>{
   console.log(us)
}).catch(function(error){
   console.log(error)
}).finally(()=>console.log('the promise is either resolved or rejected'))


