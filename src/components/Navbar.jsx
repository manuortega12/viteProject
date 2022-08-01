import React from "react";
import Cartwidget from './CartWidget';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="container">
        <nav className="nav">
          <div className="nav_brand">
            <NavLink className='nav_link' to='/'>My ecommerce</NavLink>
          </div>
          <ul className="nav_list">
            <li>
              <NavLink className="nav_link" to='comida/menu'>Menu</NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to='comida/guarnicion'>Guarniciones</NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to='cart'><Cartwidget /></NavLink>
            </li>
          </ul>
        </nav>
      </div>
      );
}

export default NavBar