const isUserloggedIn=true
const temp=41

if(temp===40){    //=== represents strictly equal to, where datatypes and value both should be same
    console.log('less than 50')
}else{
    console.log('temp is greater than 50')
}
console.log('definately execute')

//scope related

const score=200
if(score>100){
    const power='fly'
    console.log(`user power : ${power}`)
}

// console.log(`user power : ${power}`) //it wont execute it will say power not defined bcz its outside scope but if we would habe declared var power='fly', it would executed outside the scope also but  that shouoldnt happen

// short hand notation//
const balance=1000
if(balance>500) console.log('test'),console.log('test2'); //implicit scope but very unreadable code


//
if(balance<500){
    console.log("less than 500")
}else if(balance<750){
     console.log('less than 750')
}else if (balance<900){
    console.log("less than 900")
}else{
    console.log("less than 1200")
}

//
const userLoggedIn=true
const debitcard=true
const loggedInFormGoogle=false
const loggedInFormEmail=true
if(userLoggedIn && debitcard){
    console.log('allow to buy course')
}
if (loggedInFormGoogle|| loggedInFormEmail){
    console.log('user logged in')
}

