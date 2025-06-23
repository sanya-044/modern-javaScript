const name='sanya'
const repo=50
// console.log(name+repo+' value')   very old syntax . not recommended

console.log(`hello my name is ${name} and my repo is ${repo}`); // (i can also use toupper case on that name )

//way to declare string
const gamename= new String('sanyac')

console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(3))
console.log(gamename.indexOf('n'))
console.log(gamename.substring(0,3))
console.log(gamename.slice(-5,4))
console.log(gamename.slice(1,3))
// trim and replace

const newStringOne='   san   '
console.log(newStringOne)
console.log(newStringOne.trim())

const url='http://sanya.comhatbechauhan'
console.log(url.replace('hatbe' ,'-'))
console.log(gamename.split('a' ))