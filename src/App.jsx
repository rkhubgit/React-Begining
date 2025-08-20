import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Components/Refs/Login";
import { ForwardRefForm } from "./Components/Refs/ForwardRefForm";
import { FunCompApis } from "./Components/APIs/FunCompApis";
import ClassCompAPI from "./Components/APIs/ClassCompAPIs";
import { FormV1 } from "./Components/FormValidations/FormV1";

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
        {/* <Login/> */}
        {/* <ClassCompAPI/> */}
        <FormV1/>
      </div>
    </>
  );
}

export default App;
