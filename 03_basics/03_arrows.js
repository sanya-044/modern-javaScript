const user={
    username:'sanya',
    price:99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
//console.log(typeof user.welcomeMessage()) 
  user.welcomeMessage()
  user.username='sam'
  user.welcomeMessage()
  console.log(this)


  function chai(){
    let user='sanya'
    console.log(this)    //is we console.log(this.user) it will  show undefined . bcz we cant use this keyword in functions .this is used only in objects
  }

  chai()

  const chaii=function (){
    let username='sannyya'
    console.log(this.username) //here also this function is not working
  }
  chai()

  //arrow function

  const addTwo=(num1,num2)=>{  //explicit return
    return num1+num2
  }

  console.log(addTwo(3,4))

  //more ways fir arrow function(implicit retrn)
  const addtwo=(num1,num2)=> (num1+num2)
  console.log(addtwo(5,1))
//how to return obj
const addtwoo=(num1,num2)=>({username:'sanya'})