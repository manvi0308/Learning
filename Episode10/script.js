// function y along with its lexical scope i.e. (function x) would be called a closure.

function x(){
    var a = 5;
    function y(){
        console.log(a);
    }

    return y;
}

var z = x();
console.log(z);

/*
Function bundled along with it's lexical scope is closure.

JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent */

// In above code, When y is returned, not only is the function returned but the entire closure (fun y + its lexical scope) is returned and put inside z. So when z is used somewhere else in program, it still remembers var a inside x()
z();