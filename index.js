function add(a,b) {
 return a + b; 
}

function subtract(c,d) {
  return c-d; 
}

function multiply(e,f) {
  return e * f;
}

function divide(g,h) {
  return g / h; 
}

var n = 0;
function inc(n){
  n++;
  return n;
}




it('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})