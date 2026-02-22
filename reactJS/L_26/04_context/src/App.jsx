/* eslint-disable react-refresh/only-export-components */
//----case-1 data feeds from app to child directly
// import React from 'react'
// import Child1 from "./Child1"

// const App = () => {
//   let data = {
//     fname: "vikas",
//     lname: "thakur",
//     age: 25,
//   };
//   return (
//     <div>
//       <Child1 data={data} />
//     </div>
//   )
// }

// export default App

//---------------case-2 using useContext trick
import React from 'react'
import Child1 from "./Child1"
import { createContext  } from 'react'

export const postman = createContext();

const App = () => {
  let data = {
    fname: "vikas",
    lname: "thakur",
    age: 26,
  };
  return (
    <postman.Provider value={data}>
      <div>
      <Child1 />
    </div>
    </postman.Provider>
  )
}

export default App

//total 5 hook done -> useState, useRef, useHook, createContext, useContext, useLayout
