//------------case3
// import React from 'react'

// const Child3 = () => {
//   return (
//     <div>Child3</div>
//   )
// }

// export default Child3

//-----------------case4
import React from 'react'
import { useContext } from 'react'
import { postman } from './App'

const Child3 = () => {
  const data = useContext(postman);  
  return (
    <div>
        <h1>{data.fname}</h1>
        <h2>{data.lname}</h2>
        <p>{data.age}</p>
    </div>
  )
}

export default Child3

