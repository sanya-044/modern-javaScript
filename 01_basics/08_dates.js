//date
let myDate= new Date()
console.log(myDate) //not readable
console.log(myDate.toString())  //readable

//methods
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)
//
 let myCreatedDate= new Date(2023,0,23)
 console.log(myCreatedDate.toDateString())
 //
 let myCreatedDatee= new Date(2023,0,23,5,3)
 console.log(myCreatedDatee.toLocaleString())
 //
 let myCreatedDateee= new Date("2023-01-14")
 console.log(myCreatedDateee.toLocaleString())
 //
 let myTimeStamp=  Date.now()
 console.log(myTimeStamp)   // it will give timestamp from 1st jan 1970 till todays date in milliseconds
 //
console.log(myCreatedDate.getTime()) //it will give timestamp from mycreatedate till today in milliseconds
//if we want in seconds then devide it by 1000  and to avoit decimal numbers apply math.float

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
newDate.toLocaleString('default',{
    weekday:'long',
    
})
