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