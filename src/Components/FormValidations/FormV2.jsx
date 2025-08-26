import React, { useRef } from 'react'
import * as yup from 'yup';

export const FormV2 = () => {

    const usernameRef = useRef();
    const passwordRef = useRef();


    // const userInfo = {
    //     username: "",
    //     password: ""
    // }

        const structure = yup.object().shape({
        // name: yup.string().required('name cant be empty').min(8).matches(RegexParser('[^0-9]', {message: 'not matching the pattern'})),
        name: yup.string().required('name cant be empty').min(8),
        password: yup.string().required('password cant be empty').min(10)
    })

    const loginUser = (e) => {
        console.log('login clicked');
        e.preventDefault()
        let userInfo = {}
        userInfo.name = usernameRef.current.value
        userInfo.password = passwordRef.current.value
        // userInfo.username = usernameRef.current.value
        console.log(userInfo);
        
        structure.validate(userInfo, {abortEarly: false})
        .then((value) => {
            console.log('successfully matched');
            console.log(value);
        })
        .catch((err) => {
            console.log('not matched');
            
            // console.log(err.inner);
        })
    }

    return(

        <>
        <h2>FormV2 Component</h2>
        <label htmlFor="username">User Name:</label>
        <input type="text" name="username" id="" ref={usernameRef} />
        <br />
        <label htmlFor="Password">Password</label>
        <input type="password" name="password" id="" ref={passwordRef} />
        <br />
        <button onClick={loginUser} >Login</button>
        </>
    )
}