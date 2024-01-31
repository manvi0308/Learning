const goals = ["CCP", "JS", "DSA", "React"];

const values = goals.forEach((element) => {
  console.log(element);
  return element;
});

console.log(values);
// for each loop does not return anything

const nums =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.filter(() => {})