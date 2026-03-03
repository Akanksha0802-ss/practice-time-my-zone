// task-2
let num = 100;

function outer1() {
  let num = 50;
  console.log("outer1:", num);

  function outer2() {
    let num = 30;
    console.log("outer2:", num);

    function outer3() {
      let num = 20;
      console.log("outer3:", num);

      function outer4() {
        console.log("outer4 before:", num);
        num = 10;
        console.log("outer4 after:", num);
      }

      outer4();
      console.log("outer3 end:", num);
    }

    outer3();
    console.log("outer2 end:", num);
  }

  outer2();
  console.log("outer1 end:", num);
}

outer1();
console.log("global:", num);
