//the values which are by default assumed to be true is truthy and vice versa is falsy
const userEmail='s@.ai'
if(userEmail){  //here i have value userEmail no comparison nothing ,so this string is assumed to be true
    console.log('got user email')
}else{
    console.log("dont have user email")
}

//falsy values
// false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN

//truthy value
//'0' , 'false' , ' ' , {} , [] , function(){}


//how to check an empty obj

const emptyObj={}
if (Object.keys(emptyObj).length===0) {   //Object.keys(emptyObj) return array of objects
    console.log('obj is empty')
}

//nullish aoalescing operator(??):null , undefined
let val1;
//val1=5?? 10 //assigns 5
val1=null??10 //asigns 10
val1=undefined??15 //assigns 10
val1=null??10??20 //first value assigns thats 10
console.log(val1);


//ternary operator(small syntax of if else)
   // condition ? true:false(syntax)

   const iceteaprice=100
   iceteaprice>=80? console.log('less than 80'): console.log("more than 80")
