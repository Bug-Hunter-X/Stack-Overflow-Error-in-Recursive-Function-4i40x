function foo(a, b) {
  if (a === b) {
    return true; 
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b); 
  }
}

console.log(foo(1, 5));

function fooSolution(a, b) {
  if (a > b) return false; // Added base case
  if (a === b) return true; 
  return fooSolution(a + 1, b); 
}
console.log(fooSolution(5,1)); //this will work correctly now
console.log(fooSolution(1, 5)); //this will also work correctly