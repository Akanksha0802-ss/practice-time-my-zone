//task-3
var value = 5;

function one() {
  console.log("one:", value);
  var value = 10;

  function two() {
    console.log("two before:", value);
    let value = 15;
    console.log("two after:", value);

    function three() {
      console.log("three:", value);

      function four() {
        value = 25;
        console.log("four:", value);
      }

      four();
      console.log("three end:", value);
    }

    three();
    console.log("two end:", value);
  }

  two();
  console.log("one end:", value);
}

one();
console.log("global:", value);