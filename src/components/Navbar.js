import React from 'react';
import { Link } from 'react-router-dom'; // Jika menggunakan React Router
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        {/* Tambahkan item navigasi lainnya sesuai kebutuhan */}
      </ul>
    </nav>
  );
}

export default Navbar;