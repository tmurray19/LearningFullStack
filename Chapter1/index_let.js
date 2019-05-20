function hello(name){
    // this is a function scope

    var greeting = "Hello";
    return greeting + ', ' + name + ".";
}

console.log(hello("Node")); // Hello, Node.
console.log(greeting); // Reference error


{
    let scopeVariable = "42";
    const scopeConstant = "37";
    scopeConstant = "38"; // TypeError: Assignment to Constant Variable
}

console.log(scopeVariable); // ReferenceError
console.log(nestedScopeVariable); // ReferenceError

if (true){
    var letter1 = "A";
}

console.log(letter1);

for (let i = 0; i<10; i++){
    // Loop
};
console.log(i); // ReferenceError
