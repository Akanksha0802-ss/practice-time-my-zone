//-----------api call using fetch
// writing fetch in this way
// import React from 'react'
// import { useState, useEffect } from "react";

// const App = () => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//       const response = await fetch("https://dummyjson.com/products");
//       const data = await response.json();
//       setData(data);
//       console.log(data);
//       } catch (err) {
//       console.log(err);
//     }
//      return [data];
//   };
//      fetchData();
//   });
//    return <div>App</div>
// };

// export default App

//--------------------------api call using axios
//in this code throwing error
// import React from 'react'
// import { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [data, setData] = useState();
//   useEffect(() => {

//     const fetchData = async () => {
//       try {
//       const response = await axios.get("https://dummyjson.com/products");
//       const data = await response.json();
//       setData(data);
//       console.log(data);
//       } catch (err) {
//       console.log(err);
//     }
//      return [data];
//   };
//      fetchData();
//   });
//    return <div></div>
// };

// export default App


//--------------------------api call using axios with async await
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {

    const fetchData = async () => {
      try {
      const response = await axios.get("https://dummyjson.com/products");
      //const data = await response.json();
      setData(response.data);
      console.log(response.data);
      } catch (err) {
      console.log(err);
    }
     return [data];
  };
     fetchData();
  });
   return <div></div>
};

export default App

//which one is easy axios call ya fetch call-> fetch call is easy, using fetch we can give data to the one entity to another entity , answer is no that time Axios is come
//right now we are handling the data on client side
//when we send the data from client side to Mongo DB through Backend -> first data willl go from frontend to backend to MongoDB, so hmhe three entity keh beech meh data daalna h
//fetch meh only fetch.get used hota thats why we used fetch on client Side
//for frontend and backend connection we used axios

//interwiew Qs. kya hmhe useEffect ka use krna chahiye jb hm api call krne keh liye jb hm development meh deal kr rahe ho tb

//kya hmhe production meh useEffect use krna chahiye
//search on google-> alternative of useEffect for api call in production environment. -> and read it
//3 environment hoteh h Dev(means code local environment meh h abhi), testing, prod(means production environment)

//seach on google-> api call using tanstack query. read it and understand it
//userQuery is just like hook -> Query means function means instruction means method means hook
//ask alternative used of useEffect is tanStack
//this all are complimentary thing from sir side -> but company ask this things according to current market
//till here frontend part is done in L_30

//today date is 02-march-2026(not going HOME to the Holi)