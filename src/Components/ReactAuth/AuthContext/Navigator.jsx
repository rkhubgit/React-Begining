import React, { useContext } from 'react'
import { userContext } from './AuthContext'
import { Navigate } from 'react-router-dom'


export const Navigator = ({children}) => {
    const {loggedInUser} = useContext(userContext);
    if(loggedInUser.email){
        return {children}
    }else{
        return <Navigate to="/"/>
    }
}