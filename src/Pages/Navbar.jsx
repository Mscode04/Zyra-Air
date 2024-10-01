import React from 'react';
import '../App.css';
import logoBk from '../Assets/Main/bk-logo.png';
import Cart from '../Assets/Main/cart.png';
import Fav from '../Assets/Main/icons8-heart-50.png';
import Log from '../Assets/Main/icons8-user-30.png';
import { NavLink,Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-slate-200 bg-opacity-50 p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logoBk} alt="Logo" className="logo h-6" />
        </div>
        <nav className="flex space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) => 
          ` ${isActive ? 'underline text-green-500' : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/men"
        className={({ isActive }) => 
          ` ${isActive ? 'underline text-green-500' : ''}`
        }
      >
        Men
      </NavLink>
      <NavLink
        to="/women"
        className={({ isActive }) => 
          `${isActive ? 'underline text-green-500' : ''}`
        }
      >
        Women
      </NavLink>
      <NavLink
        to="/popular"
        className={({ isActive }) => 
          ` ${isActive ? 'underline text-green-500' : ''}`
        }
      >
        Popular
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => 
          `${isActive ? 'underline text-green-500' : ''}`
        }
      >
        About
      </NavLink>
    </nav>
        <div className="flex items-center space-x-4">
      <Link to="/cart">
        <img src={Cart} alt="Cart" className="h-6 cursor-pointer" />
      </Link>
      <Link to="/fav">
        <img src={Fav} alt="Fav" className="h-6 cursor-pointer" />
      </Link>
      <Link to="/log">
        <img src={Log} alt="Login" className="h-6 cursor-pointer" />
      </Link>
        </div> 
      </div>
    </nav>
    
  );
}
export default Navbar;
