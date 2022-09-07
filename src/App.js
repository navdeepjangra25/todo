import React from "react";
import "./App.css";
import ShoppersStop from './components/ShoppersStop/ShoppersStop';
//import Todos from "./components/Todos/Todos";
import {ThemeState} from './Contexts/ThemeState';
// import Signup from './components/Signup/Signup';
//import HookTimer from './components/UseRefExample/HookTImer';
//import MemoExample from './components/UseMemoExample/MemoExample';
//import Counter from './components/Counter/CounterWithReducer';
const App = () => {
  console.log(<ShoppersStop/>)
  return (
   <div className="container-fluid">
     <div className="d-flex justify-content-center align-items-center">
       <ThemeState>
        <ShoppersStop/>
         {/* <Signup/> */}
        {/* <HookTimer/> */}
        {/* <MemoExample/> */}
          {/* <Todos/> */}
          {/* <Counter/> */}
       </ThemeState>
     </div>
   </div>
  );
}

export default App;
