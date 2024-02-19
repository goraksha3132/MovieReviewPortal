import { Outlet, Link } from "react-router-dom";
import React from 'react';
import logo from "./components/img/logo.png"

const Layout = () => {
  return (
    <>
    
      <nav className="navbar1">
        <ul className="navbar2" >
          <img src={logo} alt="logo" className="Logo"></img>
          <li ><h3 className="a">Re</h3><h3 className="b">vi</h3><h3 className="c">ew</h3></li>
          <li>
            <Link to="/" className="my-link">Home</Link>
          </li>
          <li>
            <Link to="/collection" className="my-link">Collection</Link>
          </li>
          <li>
            <Link to="/tv_streming" className="my-link">TV-Streming</Link>
          </li>
          <li>
            <Link to="/watchlist" className="my-link">Watchlist</Link>
          </li>
          <li>
            <Link to="/about" className="my-link">About</Link>
          </li>


          <li class="dropdown">
            <Link to="/login" className="my-link">
                <button class="dropdown-button">Login</button>
                <div class="dropdown-content">
                    <Link to="/rf" className="my-link" >Registration</Link>
                </div>
            </Link>
            
          </li>

          <li>
            <div class="search">
              <input type="text" name="" id="" placeholder="Search Here"/>
              <button className="btn">Search</button>
            </div>
          </li>

            



        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;