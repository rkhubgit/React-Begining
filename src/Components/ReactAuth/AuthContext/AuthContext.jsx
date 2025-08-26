import React, { createContext, useState } from 'react'

export const userContext = createContext()
export const AuthContext = ({children}) => {

    const [loggedInUser, setLoggedInUser] =useState({})
    
    return(
        <>
           
            <userContext.Provider value={{loggedInUser, setLoggedInUser}} >
                {children}
            </userContext.Provider>
        </>
    )
}