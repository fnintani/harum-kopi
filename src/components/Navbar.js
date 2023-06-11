import React from "react";
import { useState } from "react";
import { FaMugHot } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="#" className="Logo">
        Harum Kopi <FaMugHot />{" "}
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <RxHamburgerMenu />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Review</a>
          </li>
          <li>
            <a href="#">Book</a>
          </li>
        </ul>
      </div>
      <a href="#" className="btn">
        Book a table
      </a>
    </nav>
  );
};

export default Navbar;
