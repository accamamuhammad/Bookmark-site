import NavCSS from "./Navigation.module.css";
import { useState } from "react";

const Navigation = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <nav className={`${menuToggle ? NavCSS.normalOpen : NavCSS.DarkOpen}`}>
      <div className="logo">
        <img src="/images/Screenshot 2024-02-29 at 1.24.05 PM.png" alt="logo" />
        <p>Bookmark</p>
      </div>
      <ul
        className={`${NavCSS.links} ${
          menuToggle ? NavCSS.menuOpen : NavCSS.menuClosed
        }`}
      >
        <div className={NavCSS.line} />
        <li>FEATURES</li>
        <div className={NavCSS.line} />
        <li>PRICING</li>
        <div className={NavCSS.line} />
        <li>CONTACT</li>
        <div className={NavCSS.line} />
        <button className={NavCSS.button}>LOGIN</button>
        <div className={NavCSS.navSocial}>
          <img src="/images/icon-facebook.svg" alt="facebook-icon" />
          <img src="/images/icon-twitter.svg" alt="twitter-icon" />
        </div>
      </ul>
      <div className={NavCSS.menuIcon} onClick={() => toggleMenu()}>
        <img
          src={
            menuToggle
              ? "/images/icons8-menu-50.png"
              : "/images/icon-hamburger.svg"
          }
          alt="menu-icon"
        />
      </div>
    </nav>
  );
};

export default Navigation;
