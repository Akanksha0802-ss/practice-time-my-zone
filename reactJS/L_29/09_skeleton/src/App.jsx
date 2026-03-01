// import React from 'react'
// import Card from './Card'

// const App = () => {
//   return (
//     <div>
//       <Card />
//     </div>
//   )
// }

// export default App;

//--------------------

import React from "react";
import Card from "./Card";
import Skeleton from "./Skeleton"
import { useState, useEffect } from "react"

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
  return () => clearTimeout(timer);
}, []);
return <div>{loading ? <Skeleton /> : <Card />}</div>;
};

export default App;

//advnced concept ->First techniques of rendering optimization ui which is called simmer ui or skeleton ui or simmering effect