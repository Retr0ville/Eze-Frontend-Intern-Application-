import React, { useState } from "react";
import NavItemIcon from "../../components/NavItemIcon";

const Header = () => {
  const [isLoggedIn] = useState(false);

  return (
    <header>
      <div>
        <a href="/">
          <h1 className="orderlly">Eze.Tec</h1>
        </a>
      </div>

      <div className="header-nav">
        <nav>
          <ul className="nav justify-content-end">
            <NavItemIcon href="#" faIcon="fa fa-laptop" text="My posts" />
            <NavItemIcon href="#" faIcon="fa fa-star" text="Favourites" />
            <NavItemIcon
              href="#"
              faIcon="fa fa-user-plus"
              text="Login/Sign-up"
            />
            <NavItemIcon
              isHidden={isLoggedIn ? false : true}
              href="#"
              faIcon="fa fa-user"
              text="Profile"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
