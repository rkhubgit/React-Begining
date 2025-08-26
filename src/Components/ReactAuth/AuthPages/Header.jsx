import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <ul style={{listStyle: 'none'}}  >
        <li>
            {/* <a href="/homepage">Home</a> */}
            {/* <Link to='/homepage'>Home</Link> */}
            {/* <NavLink to='/homepage'>Home</NavLink> */}
        </li>
        <li >
            {/* <a href="/profile">Profile</a> */}
            {/* <Link to='/profile'>Profile</Link> */}
            <NavLink style={{color: 'black'}} to='/profile'>Profile</NavLink>
        </li>
        <li >
            {/* <a href="/login">Login</a> */}
            {/* <Link to='/login'>Login</Link> */}
            <NavLink style={{color: 'black'}} to='/'>Login</NavLink>
        </li>
        <li >
            <NavLink style={{color: 'black'}} to='/signup'>Signup</NavLink>
        </li>
    </ul>
  )
}