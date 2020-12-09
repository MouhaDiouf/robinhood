import React, { useState } from 'react';
import logo from './robinhood.svg';
import './Header.css';
function Header() {
  const addClassName = (e) => {
    let element = e.target;
    if (element.classList.contains('header__icon')) {
      element = element.parentElement;
    }
    if (element.classList.contains('open')) {
      element.classList.remove('open');
      setShowMenu(false);
    } else {
      element.classList.add('open');
      setShowMenu(true);
    }
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="header__navigation" onClick={addClassName}>
        <div className="header__icon"></div>
      </div>
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="logo" width={25} />
        </div>
        <div className="header__search">
          <div className="header__searchContainer">
            <input placeholder="Search" type="text" />
          </div>
        </div>

        <div className="header__menuItems">
          <a href="#">Free Stocks</a>
          <a href="#">Porfolio</a>
          <a href="#">Cash</a>
          <a href="#">Messages</a>
          <a href="#">Account</a>
        </div>
      </div>
      <div className={`mobile-menu overlay ${showMenu ? 'open' : 'close'}`}>
        <div className="header__menuItems">
          <a href="#">Free Stocks</a>
          <a href="#">Porfolio</a>
          <a href="#">Cash</a>
          <a href="#">Messages</a>
          <a href="#">Account</a>
        </div>
      </div>
    </>
  );
}

export default Header;
