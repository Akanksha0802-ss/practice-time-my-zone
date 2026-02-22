//----------case-1

// import React, { useState } from "react";

// const App = () => {
    
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>count is:{count}</p>
//       <button onClick={() => setCount(count + 1)}>increase</button>
//     </div>
//   )
// }

// export default App;

// //----------case-2

// import React, { useState } from "react";

// const App = () => {
//   console.log("hello");
//   const [count, setCount] = useState(0);
//   let a = 0;

//   const handleIncrement = () => {
//     setCount(count + 1)
//     a = a + 1;
//     console.log(a);
//   }
//   return (
//     <div>
//       <p>count is:{count}</p>
//       <button onClick={handleIncrement}>increase</button>
//     </div>
//   )
// }

// export default App;

// //----------case-3 using useRef Hook

// import React, { useState, useRef } from "react";

// const App = () => {
//   console.log("hello");
//   const [count, setCount] = useState(0);
//   const ref = useRef(15);
//   console.log(ref);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <p>count is:{count}</p>
//       <button onClick={handleIncrement}>increase</button>
//     </div>
//   )
// }

// export default App;

//----------case-4 using useRef Hook

// import React, { useState, useRef } from "react";

// const App = () => {
//   console.log("hello");
//   const [count, setCount] = useState(0);
//   const ref = useRef(0); //we can pass this vikas is also anything instead of 0
//   //console.log(ref);

//   //current value hold
//   const handleIncrement = () => {
//     setCount(count + 1);

//     console.log(ref.current);
//     ref.current = ref.current + 1;
//     console.log(ref.current);
    
//   };
//   return (
//     <div>
//       <p>count is:{count}</p>
//       <button onClick={handleIncrement}>increase</button>
//     </div>
//   )
// }

// export default App;

//----------case-5 using useRef Hook
//here access of DOM
//useRef Hook main work to holds any of reference
//DOM manipulation, only done time

// import React, { useState, useRef } from "react";

// const App = () => {
//  // console.log("hello");
//   const [count, setCount] = useState(0);
//   const ref = useRef();
//   //console.log(ref);
//   // let a = 0;
  

//   const handleIncrement = () => {
//     setCount(count + 1);
//    // a = a + 1;
//   //  console.log(a);
//   //  console.log(ref.current);
//   //  ref.current =  ref.current + 1;
//   //  console.log(ref.current);
//   };
//   // console.log(ref);
//   return (
//     <div>
//       <p ref={ref}>count is:{count}</p>
//       {/* {console.log(ref.current)} */}
//       {console.log(ref.current)}
//       {(ref.current.style.backgroundColor = "red")}
//       {/* {(ref.current.style.color = "green")} */}
//       <button onClick={handleIncrement}>increase</button>
//     </div>
//   )
// }

// export default App;


// //----------case-6 using useRef Hook

// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//  // console.log("hello");
//   const [count, setCount] = useState(0);
//   const ref = useRef();
//   //console.log(ref);
//   // let a = 0;
  
// const handleIncrement = () => {
//     setCount(count + 1);
//    // a = a + 1;
//   //  console.log(a);
//   //  console.log(ref.current);
//   //  ref.current =  ref.current + 1;
//   //  console.log(ref.current);
//   };
 

//   useEffect(() => {
//     ref.current.style.color = "red";
//     ref.current.style.backgroundColor = "yellow";
//   });
//   // console.log(ref);
//   return (
//     <div>
//       <p ref={ref}>count is:{count}</p>
//       {/* {console.log(ref.current)} */}
//       {/* {console.log(ref.current)} */}
//       {/* {(ref.current.style.backgroundColor = "green")} */}
//       {/* {(ref.current.style.color = "green")} */}
//       <button ref={ref} onClick={handleIncrement}>increase</button>
//     </div>
//   )
// }

// export default App;

//useRef Docs Read:https://react.dev/reference/react/useRef


//----------case-7 useLayoutEffect

import React, { useState, useRef, useLayoutEffect } from "react";

const App = () => {
 // console.log("hello");
  const [count, setCount] = useState(0);
  const ref = useRef();
  //console.log(ref);
  // let a = 0;
  
const handleIncrement = () => {
    setCount(count + 1);
   // a = a + 1;
  //  console.log(a);
  //  console.log(ref.current);
  //  ref.current =  ref.current + 1;
  //  console.log(ref.current);
  };
 

  useLayoutEffect(() => {
    ref.current.style.color = "red";
    //ref.current.style.backgroundColor = "yellow";
  });
  // console.log(ref);
  return (
    <div>
      <p ref={ref}>count is:{count}</p>
      {/* {console.log(ref.current)} */}
      {/* {console.log(ref.current)} */}
      {/* {(ref.current.style.backgroundColor = "green")} */}
      {/* {(ref.current.style.color = "green")} */}
      <button ref={ref} onClick={handleIncrement}>increase</button>
    </div>
  )
}

export default App;

// https://react.dev/reference/react/useLayoutEffect
