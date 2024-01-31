/*let timer = setTimeout(() => {
  console.log("I will run after 1 seconds");
}, 1000);*/

//console.log(timer);

/*function helloWorld() {
  console.log("Hello world");
}
console.log("Something will be executed after 2sec");
const timerID = setTimeout(helloWorld, 1000);
console.log(timerID);
clearTimeout(timerID);*/
// repeat with the interval of 2 seconds
let timerI = setInterval(() => alert("tick"), 2000);

// after 5 seconds stop
setTimeout(() => {
  clearInterval(timerI);
  console.log("stop");
}, 5000);
//^ setInterval
let timerId = setInterval(() => {
  console.log(" i will be executed repeatedly after every 2 sec");
}, 2000);

setTimeout(() => {
  clearInterval(timerID);
  console.log("stop");
}, 5000);
