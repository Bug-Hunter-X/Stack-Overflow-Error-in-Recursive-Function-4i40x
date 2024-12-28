function foo(a, b) {
  if (a === b) {
    return true; 
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b); 
  }
}

console.log(foo(1, 5)); // this will work correctly 
console.log(foo(5, 1)); // this will cause a stack overflow error because the recursion never ends