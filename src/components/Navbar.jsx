import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Todayq</div>
      <Link to="/cart" className="navbar-cart">
        <FaShoppingCart size={24} />
      </Link>
    </nav>
  );
};

export default Navbar;
