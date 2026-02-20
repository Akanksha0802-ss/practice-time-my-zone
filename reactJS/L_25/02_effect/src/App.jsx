//------case-1-----------

// import React, { useState } from "react"

// const App = () => {
//   //console.log("Hi");

//   const [count, setCount] = useState(0);

//   // const handleClick = () => {
//   //   setCount(count + 1);
//   // }
//   return (
//     <div>
//     <p>value of count is :{count}</p>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App

//----------------------case2-----------

// import React, { useState } from "react"

// const App = () => {

//   function api(){
//     console.log("api called");
//   }
//   api();

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//     <p>value of count is :{count}</p>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App

//----case-3 using useEffect-------------
//here sideEffect perform by useEffect but when, when we want

// import React, { useEffect, useState } from "react"

// const App = () => {

//   const [count, setCount] = useState(0);

//   // useEffect(fn, []);
//   useEffect(() => {
//     console.log("api called");
//   }, []);

//   return (
//     <div>
//     <p>value of count is :{count}</p>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App


//-----------case-4 using useEffect
//useEffect ka main kaam h memory management krana
// import React, { useEffect, useState } from "react"

// const App = () => {

//   const [count, setCount] = useState(0);

//   // useEffect(fn, []);
//   useEffect(() => {
//     console.log("api called");
//     return () => {
//       console.log("memory cleaned");
//     };
//   }, []);

//   return (
//     <div>
//     <p>value of count is :{count}</p>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App

// //-----------case-5 using useEffect----

// import React, { useEffect, useState } from "react"

// const App = () => {

//   const [count, setCount] = useState(0);

//   // useEffect(fn, []);
//   useEffect(() => {
//     console.log("api called");
//   }, [count]);

//   return (
//     <div>
//     <p>value of count is :{count}</p>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App


// //-----------case-6 using useEffect----

// import React, { useEffect, useState } from "react"

// const App = () => {
//   const [count, setCount] = useState(0);

//   // useEffect(fn, []);
//   useEffect(() => {
//     if(count == 1) {
//        console.log("component mounted");
//     } else if (count === 2) {
//       console.log("component updated");
//     } else if (count === 3) {
//       console.log("component unmounted");
//     }
//   }, [count]);

//   return (
//     <div>
//     <p>value of count is :{count}</p>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App


//-----------case-7 using useEffect Hook

import React, { useEffect, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);

  // useEffect(fn, []);
  useEffect(() => {
       console.log("mounted");
       return function () {
       console.log("unmounted");
    };
  }, [count]);

  return (
    <div>
    <p>value of count is :{count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App



//topic revise -> JS callback, promises,async await and event or dom
//Read this Docs of useEffect Hook->https://react.dev/reference/react/useEffect
