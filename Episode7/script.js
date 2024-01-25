//^ Type 1
//& Single function trying to access global variable.
function a(){
    console.log(b); // b can be accessed, means somehow a is able to access b defined in global scope.
}

var b = 10;
a();

//^ Type 2
//& Nested function can also access variable defined in global scope.
function c(){
    d();
    function d(){
        console.log(b);
    }
}

c();

//^ Type 3
//& Nested function and same variable is defined in both global and local scope, here
//& local scope will take precedence.
function e(){
    f();
    function f(){
        var b = 100;
        console.log(b);
    }
}

e();

//^ Type 4
//& nested function, trying to access local variable outside.
function g(){
    var i = 200;
    h();
    function h(){
        console.log(i);
    }
}

g();
// Uncaught ReferenceError: i is not defined
//! A function can access a global variable, but the global execution context can't access any local variable.
console.log(i);
