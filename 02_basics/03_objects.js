//singleton (whenever we make objects through constructor its singleton)

//object literals(whenever we make objects though literals its object literals)


//declaring symbols
const mySym=Symbol('key1')

//how to make objects
const jsUser={
    name:"sanya",
    'full name':'sanya chauhan',
    [mySym]:'mykey1',    //thats how we declare symbol as key
    age:20,
    email:'sanya@google.com',
    isLoggedIn:false,
    lastLoginDays:['monday','sunday']
} 

console.log(jsUser.email)//not a best way because we cant access full name by using .method
console.log(jsUser['email']) //best way 
console.log(jsUser['full name'])
console.log(jsUser[mySym])

//how to override values
jsUser.email='sanya@iter.com'
//how to freeze object
// Object.freeze(jsUser) //after the freeze no value can be overridden 
// jsUser.email='sanya@microsoft.com' //this email wont get updated because we have freezed the object
// console.log(jsUser)
jsUser.greeting=function(){
   console.log('hello js user')
}
jsUser.greetingTwo=function(){
   console.log(`hello js user, ${this.name}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

