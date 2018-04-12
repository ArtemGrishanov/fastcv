import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainMenu = () =>
  <nav className="main-menu">
    <NavLink exact to="/" className="main-menu_i" activeClassName="__selected">
      Home
    </NavLink>
    <NavLink to="/about" className="main-menu_i" activeClassName="__selected">
      About
    </NavLink>
    <NavLink to="/works" className="main-menu_i" activeClassName="__selected">
      Works
    </NavLink>
    <NavLink to="/contacts" className="main-menu_i" activeClassName="__selected">
      Contacts
    </NavLink>
  </nav>
