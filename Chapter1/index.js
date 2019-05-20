function hello(name){
    // this is a function scope

    var greeting = "Hello";
    return greeting + ', ' + name + ".";
}

console.log(hello("Node")); // Hello, Node.
console.log(greeting); // Reference error


{
    // This is a block scope
    var scopeVariable = "42";
    {
        // This is a nested block scope
        var nestedScopeVariable = "37";
    }
}

console.log(scopeVariable);
console.log(nestedScopeVariable);

if (true){
    var letter1 = "A";
}

console.log(letter1);

for (var i = 0; i<10; i++){
    // Loop
};
console.log(i); // 10
