import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()
const [emailError,setEmailError] = useState(false);
const [passwordError, setPasswordError] = useState(false);
const [accountError,setAccountError] = useState(false)


  let userInfo = {
    email: "",
    Pass: "",
  };
  const LoginUser = (e) => {
    e.preventDefault();
    userInfo.Email = emailRef.current.value;
    userInfo.Pass = passwordRef.current.value;
    // console.log(userInfo)
    validateUser(userInfo);
  };

const validateUser = (userInfo) => {
  const userList = JSON.parse(localStorage.getItem("userData"));
  //  find the user using email
  // [1,2,3,4,5]
  const userFromLocalStorage = userList.find((user) => {
    return user.email === userInfo.email;
  });
  if (userFromLocalStorage) {
    setEmailError(false);
    console.log(userFromLocalStorage);
    if (userFromLocalStorage.password === userInfo.password) {
      console.log("test");
      setLoggedInUser(userFromLocalStorage);
      navigate("/homepage");
    } else {
      setPasswordError(true);
    }
  } else {
    setEmailError(true);
  }
};

  return (
    <>
      <h2>Login page</h2>
      <label htmlFor="Email">Email : </label>
      <input type="text" name="email" id="" ref={emailRef} />
      {emailError && <p style={{color: 'red'}} >Please enter valid email</p>}
      <br />
      <br />
      <label htmlFor="Password">Password : </label>
      <input type="password" name="password" id="" ref={passwordRef} />
      {passwordError && <p style={{color: 'red'}} >Please enter valid email</p>}
      <br />
      <br />
      <button onClick={LoginUser}>Login</button>
      {accountError && <p style={{color: 'red'}} >Please enter valid email</p>}
    </>
  );
};
