import React from 'react'
import { NavLink } from 'react-router-dom'

import '../App.css';

const Navbar = () => (
  <ul className='nav'>
    <li>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/about">About</NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/services">Services</NavLink>
    </li>
  </ul>
)
 export default Navbar
