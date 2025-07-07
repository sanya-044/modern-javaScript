//ways to declare array
const myArr=[1,7,8,6,9] 
const myHeroes=['mom','dad','brother']

const myArr2=new Array(2,4,6,7)
console.log(myArr[0])


//array methods 
myArr.push(7) //adds element
console.log(myArr)
myArr.pop() //removes last element 
 myArr.unshift(9) //9 will be shifted at start of the array
 myArr.shift() //removes first element of array

 console.log(myArr.includes(0)) //checks whether 0 is present in arr or not and returns boolean value accordingly
console.log(myArr.indexOf(77)) //checks the index of the provided element
//
const newArr=myArr.join()  //changes the array to string type
console.log(myArr)
console.log(newArr) //changed the type of newArr to string
console.log(typeof newArr) //returns string

//slice , splice method
console.log('A',myArr)
const myn1=myArr.slice(1,3)

console.log(myn1)
console.log('B', myArr)

const myn2=myArr.splice(1,3)
console.log('C', myArr)
console.log(myn2)

