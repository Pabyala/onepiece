import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import Logo from "../assets/OP-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [arrowBtn, setArrowBtn] = useState(false);

  function handleArrow() {
    setArrowBtn(!arrowBtn);
  }

  const handleClickScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="navBarItems">
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>

      {/* for burger or menu list btn */}
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? (
          <FaTimes className="burgerIcon" />
        ) : (
          <GiHamburgerMenu className="burgerIcon" />
        )}
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="li-items">
              <Link
                to={item.isUrl ? item.url : ""}
                className={item.cName}
                onClick={item.isSubMenu ? handleArrow : handleClickScroll}
              >
                {item.icon}
                {item.title}

                {/* for tablet and phone  */}
                {item.isSubMenu &&
                  (arrowBtn ? (
                    <AiFillCaretDown className="rightDownIcon" />
                  ) : (
                    <AiFillCaretRight className="rightDownIcon" />
                  ))}
              </Link>
              
              {/* for laptop and desktop */}
              {item.isSubMenu && (
                <div className="ul-sublinks">
                  <div className="adds"></div>
                  <ul className="">
                    {item.subMenu.map((subLinks, index) => (
                      <li key={index}>
                        <Link to={subLinks.url} 
                              className={subLinks.cName}
                              onClick={handleClickScroll}
                        >
                          {subLinks.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* for mobile */}
              {arrowBtn && item.isSubMenu && (
                <div className="mobile-sublinks">
                  <ul className="">
                    {item.subMenu.map((sLink, index) => (
                      <li key={index}>
                        <Link to={sLink.url} 
                              className={sLink.cName}
                              onClick={handleClickScroll}
                        >
                          {sLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
