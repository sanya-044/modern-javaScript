 //syncronous = means the code runs in a particular sequence of instruction given in program. each instructions waits for the previous instruction to complete its execution
//   console.log(1)
//   console.log(3) //output will be 1 and then 3


  //asynchronous= due to syncronous programming , sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.Asynchronous code execution allows to execute next instructions immediately and doesnt block the flow

  //setimeout example
  function hello(){
    console.log('hello')
  }
  setTimeout(hello,2000) //it says that hello function will execute after 2 seconds


//another way to write setTimeout
setTimeout(()=>{
    console.log('hello')
},4000)


//example
console.log('one')
console.log('two')
setTimeout(()=>{
    console.log('hello')
},4000)
console.log('three')      //here three wont wait for the setTimeout to print hello . one , two, three will execute simultenously and 4 seconds later hello will be printed
