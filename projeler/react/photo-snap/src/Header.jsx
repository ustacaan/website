import { useState } from 'react'
import './App.css'
import { Link, NavLink } from "react-router-dom"
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";



function App() {

  const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        e.preventDefault();
        setChecked(prevState => !prevState);
    };

  return (
    <>
       <header className="header">

            <Link><img src="./img/header/logo.svg" alt="" /></Link>
            
            <ul className="nav">
              <Link to="/">Home</Link>
              <Link to="/hikaye">Stories</Link>
              <Link to="/gelecek">Features</Link>
              <Link to="/fiyat">Pricing</Link>
            </ul>

            <button>GET AN INVITE</button>

            <label className={`hamburger ${isChecked ? 'active' : ''}`} onClick={handleCheckboxChange}>
                <input type="checkbox" name="" checked={isChecked} onChange={() => {}} />
                <span className="line"></span>
                <span className="line"></span>
            </label>

            <div className={`mobileNav ${isChecked ? 'active' : ''}`}>
                <div className="mobileNavLinks">
                <Link to="/">Home</Link>
                <Link to="/hikaye">Stories</Link>
                <Link to="/gelecek">Features</Link>
                <Link to="/fiyat">Pricing</Link>
                </div>
                <a id="mobileInvite" href="/">GET AN INVITE</a>
            </div>

        </header>

    </>
  )
}

export default App
