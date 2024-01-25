console.log(a); //! Reference error - Cannot access 'a' before initialization
//^ seems let variable are not hoisted.
console.log(b); // undefined

//& a is inside separate memory object called script, where it can be accessed only after assigning some value to it.
//& hence it throws error.
let a = 10;

//& var is inside the storage space of GLOBAL
var b = 20; 

console.log(window.a); // undefined
console.log(window.b); // 20


//^  Time since when the let variable was hoisted until it is initialized some value, so everything before let a = 10 is TDZ for 'a'