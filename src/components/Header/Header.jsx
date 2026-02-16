import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">MyPortfolio</a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#appshowcase" className="nav__link">App Showcase</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            {/* <li className="nav__item"><a href="#services" className="nav__link">Services</a></li> */}
            <li className="nav__item"><a href="#qualification" className="nav__link">Qualification</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
          <i className="nav__close" onClick={() => setToggle(false)}>×</i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(true)}>
          ☰
        </div>
      </nav>
    </header>
  );
};

export default Header;