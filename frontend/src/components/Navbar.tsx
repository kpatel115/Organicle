import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Menu</li>
          <li><Link to="/">Organicle</Link></li>
        </ul>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type='text' placeholder='Search' />
        <ul>
          <li>Messages</li>
          <li>Notifications</li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/userprofile">Profile</Link><i className="fa-solid fa-user"></i></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
