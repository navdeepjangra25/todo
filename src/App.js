import React from "react";
import "./App.css";
//import Todos from "./components/Todos/Todos";
import {ThemeState} from './Contexts/ThemeState';
import Counter from './components/Counter/CounterWithReducer';
const App = () => {
  return (
   <div className="container-fluid vw-100 vh-100 ">
     <div className="d-flex justify-content-center align-items-center vh-100">
       <ThemeState>
          {/* <Todos/> */}
          <Counter/>
       </ThemeState>
     </div>
   </div>
  );
}

export default App;
