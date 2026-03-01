// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About

//-----------
import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/about/vikas">Vikas</Link>
            </li>
        </ul>
    </div>
  );
};

export default About