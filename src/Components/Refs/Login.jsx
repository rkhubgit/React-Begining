import React, { useRef } from 'react'


const Login = () => {

    const nameRef = useRef();
    const passwordRef = useRef();

    const userInfo = {
        userName: '', 
        password: ''
    }

    const LoginUser = (e) => {
        e.preventDefault();

        console.log("name", nameRef.current.value);
        console.log("password", passwordRef.current.value);

        userInfo.userName = nameRef.current.value;
        userInfo.password = passwordRef.current.value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(userInfo),
            "content-type": 'application/json'
        })

        .then((res) => res.json())
        .then((result) =>{
            console.log(result);
        })

        }

    return(
        <>
            <h2>Login Component</h2>
            <input type="text" name="name" id="" ref={nameRef} />
            <br />
            <hr />
            <input type="password" name="password" id="" ref={passwordRef} />
            <br />
            <button onClick={LoginUser} >Login</button>
        </>
    )
}

export default Login;