//case-1----------
// import React from 'react'

// const Child2 = (props) => {
//   console.log(props);
//   return <div>Child2</div>
// }

// export default Child2

//--------------case-2
// import React from 'react'
// import { useContext } from 'react';
// import { postman } from './App';

// const Child2 = () => {
//   const data = useContext(postman);
//   console.log(data);
//   return <div>Child2</div>
// }

// export default Child2

//----------------case3
import React from 'react'
import Child3 from './Child3'

const Child2 = () => {
  return (
    <div>
        <Child3 />
    </div>
  )
}

export default Child2