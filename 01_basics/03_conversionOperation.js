let score="3abc3"
console.log(typeof score);
//or
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" can be easily converted to 33 number
// "33abc" can be converted to Number but the value is Nan
// true is cinverted to Number an d value becomes 1 

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 becomes true in boolean
// 0 becomes false in boolean
// for "sanya" its true
let someNumber=33
let someeNumber=String(someNumber)
console.log(someeNumber)
console.log(typeof someeNumber)



//****operation****//
let value=3
let negValue=-value
console.log(negValue)
//

let str1="hi"
let str2="hello"

let str3= str1+str2
console.log(str3)

//
 console.log("1"+1)
 console.log(1+"2")
 console.log("1"+2+2)
 console.log(1+2+"2")

 //tricky conversions
 console.log(+true) //ver bad and confusing code  but the op is 1
 console.log(+"") //dont do this
 //

 let num1, num2 , num3
 num1=num2=num3=2+2             //very confusing try some better way 

 //

 let gamecounter=100
 gamecounter++
 console.log(gamecounter)
