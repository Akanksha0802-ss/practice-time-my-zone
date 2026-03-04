//output based task
let a = 10;
function outer() {
  let a = 30;
  console.log(a);

  function x() {
    let b = 30;
    let a = 40;
    console.log(a);
    console.log(b);

    function y() {
      console.log(a, b);
      var vikas = "vikas";
    }
    y();
  }
  x();
}
outer();
console.log(a); 
console.log(b); 
console.log(vikas); 

