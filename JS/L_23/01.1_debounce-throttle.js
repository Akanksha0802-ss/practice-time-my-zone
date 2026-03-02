function search(query) {
  console.log("searching for", query);
}
// search("vikas");
// search("vikas thakur");
// search("vikas kumar thakur");


//--------------------------------
//debounce sbse last wala input dikhata h , as a output keh form meh
// debounce(fn, delay);

// function searchWithDebounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }


// const res = searchWithDebounce(search, 2000);
// res("vikas");
// res("vikas kumar");
// res("vikas kumar thakur");

//--------------------------------
//rate limitters

//ye throttle sbse pehle wale ka input show krata h , as a output meh
function searchWithThrottle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const currentCall = Date.now();
    if (currentCall - lastCall >= delay) {
      lastCall = currentCall;
      fn(...args);
    }
  };
}

const res = searchWithThrottle(search, 2000);
res("Abhinav");
res("Abhinav Singh");
res("Abhinav Singh Rajput");