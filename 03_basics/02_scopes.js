var c= 300
if(true){
let a =10
const b=20
var c =30
}



// console.log(a);
// console.log(b)
console.log(c) //here 30 will be printed but it shouldnt print it bcz it is outside the scope . thats the problem with var

//nested scope

function one(){
    const username="hitesh"

    function two(){
        const website ='youtube'
        console.log(username)
    }
   // console.log(website) // throws error becoz we cant access function one through function 2 but vice vera happens bcoz for function 2 ..func1 is global
    two()

}
one()

// intresting//
console.log(addone(3))    //runs 
function addone(num){
return num+1
}

//

console.log(addTwo(9))    //throws error
const addTwo=function(num){
    return num+2
}
