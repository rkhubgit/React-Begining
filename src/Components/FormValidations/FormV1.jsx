import React, { useRef, useState } from 'react'


export const FormV1 = () => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const iniError = {
        usernameError: '',
        passwordError: ''
    }

    const [error, setError] = useState(iniError)


    let userInfo = {
        username: '',
        password: ''
    }


    const ValidateName = () => {
        if(usernameRef.current.value === ""){
            setError({...error, usernameError: `username can't be empty`})
        }else if(usernameRef.current.value.length < 6){
            setError({...error, usernameError: `username must be at least 6 characters`})
        }else{
            setError({...error, usernameError : ''})
        }
    }
        const Validatepassword = () => {
        if(passwordRef.current.value === ""){
            setError({...error, passwordError: `password can't be empty`})
        }else if(passwordRef.current.value.length < 6){
            setError({...error, passwordError: `password must be at least 6 characters`})
        }else{
            setError({...error, passwordError : ''})
        }
    }


    const LoginUser = (e) => {
        e.preventDefault();

        userInfo.username = usernameRef.current.value;
        userInfo.password = passwordRef.current.value;

        console.log(userInfo)
        ValidateName();
        Validatepassword();

        if(!error){
            console.log('api called successfully')
        }
    }


    return (
        
        <>
            <h2>Login Fomr</h2>
            <form action="">
                <label htmlFor="username">User Name : </label>
                <input type="text" name="username" id="" ref={usernameRef} />
                {error.usernameError && <p style={{color: 'red'}}>{error.usernameError}</p>}
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="" ref={passwordRef} />
                 {error.passwordError && <p style={{color: 'red'}}>{error.passwordError}</p>}
                <br />
                <button onClick={LoginUser} >Login</button>
            </form>
        
        </>
    )
}