//const tinderUser=new Object () //singleton object
//const tinderUser={}   // non single ton obj 

const { jsx } = require("react/jsx-runtime")

const tinderUser={}
tinderUser.id='123abd'
tinderUser.name='sanya'
tinderUser.isLoggedIn=false
//console.log(tinderUser)

const regularUser={
    email:'sanya@gmail.com' ,
    fullname:{
       userfullname:{
        firstname:'sanya',
        lastname:'chauhan'
       }
    }
}
//console.log(regularUser.fullname.userfullname)
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
 
//const obj3={obj1, obj2}
// const obj3=Object.assign({}, obj1,obj2) //empty parantheses is optional
const obj3={...obj1,...obj2} //latest syntax
console.log(obj3)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) //we took all keys in form of array
console.log(Object.values(tinderUser)) // we took all values in form of array
console.log(Object.entries(tinderUser)) 

console.log(tinderUser.hasOwnProperty('isLoggedOut'))


const course={
    courseName:'js in hindi' ,
    price:'99' ,
    courseInstructor:'sanya'
}

const{courseInstructor:ins}=course  //way to print sanya also called de structuring of object
console.log(ins)

// const navbar= ({props.company}) =>{

// }
// navbar(company="sanya")


//api concept
// {
//     'name':'shalu',
//     'coursename':'js',            //this is json 
//     'price': 'free'
// }

[
    {},
    {}
]


