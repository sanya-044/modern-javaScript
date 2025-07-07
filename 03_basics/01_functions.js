



function shalu(){
console.log('s')
console.log('a')
console.log('l')
console.log('u')
}

shalu()

function addTwoNumbers(number1, number2){
   console.log( number1+number2)
}

addTwoNumbers(3,3)

//
function addTwoNumbers(number1, number2){
   console.log( number1+number2)
}

const result=addTwoNumbers(3,2)
console.log(result) //output is undefined

//issue resolved
function addTwoNumbers(number1, number2){
   let resullt=number1+number2
   return resullt
}

const resullt=addTwoNumbers(3,4)
console.log(resullt)

//one more easy way 
function addtwonumb(n1,n2){
    return n1+n2
}
const res=addtwonumb(3,9)
console.log(res)
//

function loginUserMesssage(username){
    if(username==undefined){
        console.log('please enter a usename')
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMesssage("sanya"))

