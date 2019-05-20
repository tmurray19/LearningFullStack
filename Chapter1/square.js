const fs = reqiure("fs");

const square = function(a){
    return a*a;
}

// Alterative for declaring a function
const alternate = (a) =>{
    return a*a;
}

const alternate2 = a => a*a;

[1,2,3].map(a => a*a); // [1,4,9]
