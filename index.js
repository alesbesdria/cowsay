import "dotenv/config";

// console.log(`I am ${process.env.NAME}, wilder in ${process.env.CAMPUS}`);
const  cowsay  =  require ( "cowsay" ) ;

console.log ( cowsay.say ( { 
    text : `I am ${process.env.NAME}, wilder in ${process.env.CAMPUS}` , 
    e : "oO" , 
    T : "U " 
} ) ) ;