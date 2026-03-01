import React from "react";

import { Suspense } from "react";
import Error from "./Error";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Error />}>
        <Home />
      </Suspense>
      <Suspense fallback={<Error />}>
        <About />
      </Suspense>
    </div>
  );
};

export default App;

//note:-
//learning in L_29 in 10_opt folder concept lazy&suspense
//code splitting of 2nd name is called lazy and suspense
//Technique -> you in top 1%:-
// 1. RPT(Rendering Path Technique)
// 2. Lazy Loading
// 3. Skeleton UI/Simmer UI
// 4. Lazy and Suspense
// 5. Error and Boundaries
// 6. useEffect/useState/useRef/useLayoutEffect/useMemo/React.memo/useContext/createContext/customHook
//7. two hooks are left that is useSelector and useDespatch