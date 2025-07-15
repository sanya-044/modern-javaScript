const my=[1,2,3,4]
const newNum=my.map((num)=>num+10)  //adds 10 to every element in array and map iterates on every element
console.log(newNum)

//chaining(use two-three methods directly)
const newNumber=my
  .map((item)=>item*10)
  .map((item)=>item+1)
  .filter((item)=>item>=20)

console.log(newNumber)