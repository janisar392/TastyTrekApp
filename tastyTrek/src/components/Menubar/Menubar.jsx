import React, { useContext, useState } from 'react';
import './Menubar.css';
import {assets} from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Menubar = () => {

  const [active, setActive] = useState("home");

  const {quantities} = useContext(StoreContext);
  const uniqueItemInCart = Object.values(quantities).filter(qty => qty > 0).length;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link to={"/"}><img src={assets.logo} alt="" className='mx-2' height={48} width={48}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={active === 'home' ? "nav-link fw-bold" : "nav-link" } to="/" onClick={() => setActive('home')}
          >Home</Link>
        </li>
        <li className="nav-item">
          <Link className={active === 'explore' ? "nav-link fw-bold" : "nav-link" } to="/explore" onClick={() => setActive('explore')}
          >Explore</Link>
        </li>
        <li className="nav-item">
          <Link className={active === 'contact-us' ? "nav-link fw-bold" : "nav-link" } to="/contact" onClick={() => setActive('contact-us')}
          >Contact Us</Link>
        </li>
        
      </ul>
       <div className="d-flex align-items-center gap-4">
          <Link to={`/cart`}>
              <div className="position-relative">
                <img src={assets.cart} alt="" height={32} width={32} className='position-relative'></img>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning'>{uniqueItemInCart}</span>
              </div>
          </Link>
          <button className='btn btn-outline-primary'>Login</button>
          <button className='btn btn-outline-success'>Register</button>
       </div>
    </div>
  </div>
</nav>
  )
}

export default Menubar;