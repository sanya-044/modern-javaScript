const marvel_heros=['thor','ironman','spiderman']
const dc_heroes=['superman','flash','batman']

// marvel_heros.push(dc_heroes) //here both arrays donot merge . additionaly it creates a problem
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]) //not a good way to print 

//
const allHeroes=marvel_heros.concat(dc_heroes) 
console.log(allHeroes) 
//another way to concat
const allNewHeroes=[...marvel_heros, ...dc_heroes]
console.log(allNewHeroes)
//
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

//
console.log(Array.isArray("sanya")) //checks whether sanya is array or not
console.log(Array.from("sanya"))  //converts sanya to array
console.log(Array.from({name:'sanya'})) //intersting concept for interviews because it will return an empty array becoz we have to mention that whether we want to convert keys or value to array
//
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))