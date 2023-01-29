import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import navLink from '../../common/data';
import logo from '../../assets/files';
import '../../styles/navbar.scss';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={logo} alt="logo" />
          {' '}
          <span>Space Travelers&apos; Hub</span>
        </Link>
      </div>
      <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
        {navLink.map((element) => (
          <li key={element.id}>
            <NavLink to={element.path} className={({ isActive }) => (isActive ? 'active-nav' : '')} onClick={() => setIsNavShowing((prev) => !prev)}>{ element.name }</NavLink>
          </li>
        ))}
      </ul>
      <button type="button" className="nav-toggle-btn" onClick={() => setIsNavShowing((prev) => !prev)}>
        {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
      </button>
    </nav>
  );
};

export default Navbar;
