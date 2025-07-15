//syntax

const arr1=[1,2,3,4,5]
//for 0+1+2+3+4+5
const initialValue=0;
const sumWithInitial=arr1.reduce(
    (accumulator,currentValue)=>accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial); //expected output=15 
