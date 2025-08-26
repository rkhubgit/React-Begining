import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { ForwardRefForm } from "./Components/Refs/ForwardRefForm";
import { FunCompApis } from "./Components/APIs/FunCompApis";
import ClassCompAPI from "./Components/APIs/ClassCompAPIs";
import { FormV1 } from "./Components/FormValidations/FormV1";
import { FormV2 } from "./Components/FormValidations/FormV2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./Components/ReactAuth/AuthPages/Login";
import { Profile } from "./Components/ReactAuth/AuthPages/Profile";
import { SignUp } from "./Components/ReactAuth/AuthPages/SignUp";
import { Header } from "./Components/ReactAuth/AuthPages/Header";
import { Navigator } from "./Components/ReactAuth/AuthContext/Navigator";
import { AuthContext } from "./Components/ReactAuth/AuthContext/AuthContext";

function App() {
  const focusRef = useRef();

  const focusInput = () => {
    focusRef.current.focus();
  };

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
        {/* <FormV1/> */}
        {/* <FormV2/> */}
        <AuthContext>
          <Header />
          {/* <Router> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Navigator><Profile /></Navigator> } />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthContext>
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
