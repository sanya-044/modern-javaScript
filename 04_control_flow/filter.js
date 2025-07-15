const coding=['js', 'go']
const values=coding.forEach((item)=>{
    console.log(item)
    return item
})

console.log(values) //returns undefined bcz we cant store values in here, for each never returns a value

//
const mynum=[3,5,7]
const newnum=mynum.filter((num)=>num>4) //if we use curly braces(scope) in callback function then we must return value , and if there is no curly braces then its okay
console.log(newnum)
//

const newwnumm=[]
mynum.forEach((num)=>{
    if(num>4){
        newwnumm.push(num)

    }
})
console.log(newwnumm)


//
const books=[
       
    {title:'book one',genre:'fiction',publish:1981,edition:2004},
    {title:'book two',genre:'love',publish:1981,edition:2004},
    {title:'book three',genre:'mystry',publish:1981,edition:2004},
    {title:'book four',genre:'non-fiction',publish:1981,edition:2004},
    {title:'book five',genre:'adventure',publish:1981,edition:2004},
    {title:'book six',genre:'history',publish:1981,edition:2004},
    {title:'book seven',genre:'science',publish:2011,edition:2004},
    {title:'book eight',genre:'animal',publish:2025,edition:2005},
    {title:'book nine',genre:'science',publish:1981,edition:2009},
]
let userBooks=books.filter((item)=>item.genre==='science') //without scope
 userBooks=books.filter((hmm)=>{  //with scope
    return hmm.publish>=2004
})

console.log(userBooks);

 