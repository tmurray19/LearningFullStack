exports.i = 'am exports'
console.log(this); // {i: 'am exports'}


// Lexically scoped

let util = {
    f1: function(){
        console.log(this);
    },

    f2: ()=>{
        console.log(this);
    }
}


util.f1(); // { f1: [Function: f1], f2: [Function: f2] }
util.f2(); // {i: 'am exports'}
