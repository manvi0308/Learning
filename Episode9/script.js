// undefined - var are hoisted with value of undefined.
console.log(a);

// reference error - b is not defined, let is hoisted but value is not initialized
//console.log(b);

// reference error - c is not defined, const is hoisted but value is not initialized
//console.log(c);
{
  // Block
  var a = 10; // inside storage space of GLOBAL
  let b = 20; // separate memory space called 'script'
  const c = 30; //
}

//console.log(a);
//console.log(b);
//console.log(c);

/* Reason?
    * In the BLOCK SCOPE; we get b and c inside it initialized as *undefined* as a part of hoisting (in a seperate memory space called **block**)
    * While, a is stored inside a GLOBAL scope.

    * Thus we say, *let* and *const* are BLOCK SCOPED. They are stored in a separate mem space which is reserved for this block. Also, they can't be 
* accessed outside this block. But var a can be accessed anywhere as it is in global scope. Thus, we can't access them outside the Block.s */

//& Shadowing
var d = 100; // GLOBAL SCOPE
let e = 600;
const f = 800;
{
  var d = 200;
  let e = 300;
  const f = 400;

  console.log(d); // 200 -> Block value has overridden global value here.
  console.log(e); // 300
  console.log(f); // 400
}

console.log(d); // 200 -> line 31 modified value of d, even though we are declaring var d, however since var can be redeclared so the same reference is modified.

//^ So, If one has same named variable outside the block, the variable inside the block shadows the outside variable. This happens only for var

console.log(e); // 600
console.log(f); // 800

//^ Reason is let and const has both BLOCK AND GLOBAL SCOPE, SO GLOBAL SCOPE VALUES ARE PRINTED OUTSIDE BLOCK WHILE INSIDE BLOCK LOCAL SCOPE VALUES ARE PRINTED.


//& Shadowing in functions.
const g = 200;
function x(){
    const g = 10;
    console.log(g);
}

x(); // 10 --> Block scope overrides value of g
console.log(g); // value of g used is globally scoped here


//& Illegal shadowing
let h = 20;

{
    var h = 20; // cannot redeclare block scoped variable h
    console.log(h);
}