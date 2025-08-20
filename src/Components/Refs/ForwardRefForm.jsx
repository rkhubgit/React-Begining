import React, { forwardRef, useReducer, useRef } from 'react'

export const ForwardRefForm = forwardRef((props, focusRef) => {


    return (
        <>
            <h2>Login Form</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="" ref={focusRef} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="" />
            <br />
            <button>Login</button>
        </>
    )
})

