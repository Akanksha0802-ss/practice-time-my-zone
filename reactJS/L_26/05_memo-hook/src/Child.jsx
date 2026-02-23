//-----------case3 this is memoization hook
// import React from 'react'

// const Child = () => {
//     console.log("hello child called");
//     return (
//     <div>Child</div>
//   )
// }

// export default Child

//-------case4 ,case5
// import React from 'react'

// const Child = React.memo(() => {
//     console.log("hello child called");
//     return <div>Child</div>
// });

// export default Child

//---------case6, case7
import React from 'react'

const Child = React.memo((props) => {
    console.log("child called");
    return <div>{props.count1}</div>
});

export default Child