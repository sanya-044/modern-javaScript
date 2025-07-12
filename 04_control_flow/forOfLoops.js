//for of 

//["", "", ""]
//[{}, {}, {}]

const arr=[1,2,3,4,5]
for (const num of arr){
     console.log(num);
     
}

//

const greetings='hi'
for(const greet of greetings){
    console.log(`each char is ${greet}`);
    
}

//maps
 const map=new Map()  //map is an objECT That holds key value pair 
 map.set('endiya' ,'paxtan')
 map.set('usa', 'rich country')
 map.set('israel', 'iran')
 console.log(map);

 //for of loop in map
 for(const key of map){
    console.log(key)
 }

 //shortcut for separate values
 for(const[key,value] of map){
    console.log(key, ':-' , value);
 }

 //for of loop in object
//  const myObject={        //objects are not iterable this way , there is another approach to iterate objects
//     'game1':'nfs',
//     'game2':'spiderman'
//  }
//  for(const[key,value] of myObject){
//     console.log(key,':-', value)
//  }


//approach to iterate object(for in)
const myObject={
    js: 'js',
    cpp: 'c++',
    rb:'ruby',
    swift:"swift"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
  
//for in loop in array
const programming =['js', 'c' , 'ruby']
for(const key in programming){     
    console.log(programming[key])
}