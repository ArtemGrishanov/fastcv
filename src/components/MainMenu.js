import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainMenu = ({ pdfcv }) =>
  <nav className="main-menu">
    <NavLink exact to="/" className="main-menu_i" activeClassName="__selected">
      Me
    </NavLink>
    <NavLink to="/works" className="main-menu_i" activeClassName="__selected">
      Works
    </NavLink>
    <NavLink to="/contacts" className="main-menu_i" activeClassName="__selected">
      Contacts
    </NavLink>
    {pdfcv &&
      <a target="_blank" href={pdfcv} className="main-menu_i">
        Pdf
      </a>
    }
    {/*<NavLink to="/about" className="main-menu_i" activeClassName="__selected">
      About
    </NavLink>
    <NavLink to="/contacts" className="main-menu_i" activeClassName="__selected">
      Contacts
    </NavLink>*/}
  </nav>
