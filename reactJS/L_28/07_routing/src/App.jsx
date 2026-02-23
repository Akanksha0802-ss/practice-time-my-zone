import React from 'react'
import Dashboard from "./Dashboard";

const App = () => {
  // let username = "vikas"
  // let isLoggedIn = false;
  let isLoggedIn = true;
  return <div>
    {isLoggedIn ? <Dashboard /> : "please login first"}
  </div>
}

export default App