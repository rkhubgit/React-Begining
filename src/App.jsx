import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Components/Refs/Login";
import { ForwardRefForm } from "./Components/Refs/ForwardRefForm";
import { FunCompApis } from "./Components/APIs/FunCompApis";
import ClassCompAPI from "./Components/APIs/ClassCompAPIs";

function App() {
   
  const focusRef = useRef();

  const focusInput = () => {
    focusRef.current.focus();
  }

  return (
    <>
      <div>
        {/* <h1>App comp</h1> */}
        {/* <Login/> */}
        {/* <button onClick={focusInput} >FocusInput</button>
        <ForwardRefForm ref={focusRef} /> */}
        {/* <FunCompApis/> */}
        <Login/>
        {/* <ClassCompAPI/> */}
      </div>
    </>
  );
}

export default App;
