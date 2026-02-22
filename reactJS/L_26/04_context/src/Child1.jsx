// import React from 'react'
// import Child2 from './Child2'

// const Child1 = ( { data }) => {
//   return (
//     <div>
//         <Child2 data={data}/>
//     </div>
//   )
// }

// export default Child1

//--------------case2

import React from 'react'
import Child2 from './Child2'

const Child1 = () => {
  return (
    <div>
        <Child2 />
    </div>
  )
}

export default Child1