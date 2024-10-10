import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
<>
 <div className="navbar">
    <ul className="navbar-lists" style={{border:"2px solid red", display:"block"}}>
      <li>
         <NavLink to="/" className="navbar-links">Home</NavLink>        
      </li>
      <li>
         <NavLink to="/" className="navbar-links">About</NavLink>        
      </li>
      <li>
         <NavLink to="/" className="navbar-links">Products</NavLink>        
      </li>
      <li>
         <NavLink to="/" className="navbar-links">Contact</NavLink>        
      </li>
    </ul>
</div>
</>
}

export default Nav;