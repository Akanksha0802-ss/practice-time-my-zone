//guess the output and make GEC on your copy

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
console.log(a); //output 10 becoz a koh hm function keh bahar se access kr skteh h kyuki ye variable declaed h globally
console.log(b); // b meh error ayega reference error b is not defiend
console.log(vikas); //not access outside the function

// 30
// 40
// 30
// 40 30
// 10
// ReferenceError: b is not defined