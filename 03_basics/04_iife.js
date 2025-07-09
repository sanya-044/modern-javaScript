(function shalu(){    //its named iife
    console.log(`db connected`)   //we made it iife for fast exceution and prevent it polluted from global scope
})();    //semicolon needed to end iife and to execute next program

//
( ()=>{
   console.log(`db connected 2`)  //its unnamed iife
})();

//

((name)=>{
    console.log(`db connected two ${name}`)
})('hitesh')