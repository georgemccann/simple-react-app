import React, { useState } from 'react';
import {Link} from "react-router-dom";

export default function Navigation() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid"> 
        <Link role="link" className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" bs-data-toggle="collapse" bs-data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link aria-label="Home" className="nav-link" to="/">Home</Link>
            </li> 
          </ul> 
        </div> 
      </div> 
    </nav>
  );
}
