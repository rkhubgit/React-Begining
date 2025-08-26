import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate()

    const SignUp = (e) => {
        e.preventDefault()
        let userInfo = {};

        userInfo[nameRef.current.name] = nameRef.current.value;
        userInfo[emailRef.current.name] = emailRef.current.value;
        userInfo[mobileRef.current.name] = mobileRef.current.value;
        userInfo[passwordRef.current.name] = passwordRef.current.value;

        saveUser(userInfo)
        navigate('/')
        
    }

    const saveUser = (data) => {
        const userData = JSON.parse(localStorage.getItem('userData'))

        console.log(userData)

        if(!userData){
            let userList = [];
            userList.push(data);
            localStorage.setItem('userData', JSON.stringify(userList))
        }else{
            userData.push(data);
            localStorage.setItem('userData', JSON.stringify(userData))
        }
        



    }

    return(
        <>
            <h2>SignUp Page</h2>
            <label htmlFor="Name">Name : </label>
            <input type="text" name="name" id="" ref={nameRef}/><br /><br />
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" id="" ref={emailRef} /><br /><br />
            <label htmlFor="Mobile">Mobile No : </label>
            <input type="text" name="mobile" id="" ref={mobileRef} /><br /><br />
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="" ref={passwordRef} />
            <br /><br />
            <button onClick={SignUp} >SignUp</button>
        </>
    )
}