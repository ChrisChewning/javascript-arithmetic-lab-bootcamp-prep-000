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

var inc = 0;
function increment(){
  inc++;
  return inc;
}

it('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})

it('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})