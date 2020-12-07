import React from 'react';
import logo from './robinhood.svg';
function Header() {
  return (
    <div className="header__wrapper">
      {/* logo */}
      <div className="header__logo">
        <img src={logo} alt="logo" width={25} />
        {/* search bar */}
        {/* menu items */}
      </div>
      <div className="header__search">
        <div className="header__searchContainer"></div>
      </div>
    </div>
  );
}

export default Header;
