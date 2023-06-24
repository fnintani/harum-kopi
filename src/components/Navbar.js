import React from "react";
import { useState } from "react";
import { FaMugHot } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, animateScroll as scroll } from "react-scroll";

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
            <Link
              to="home"
              smooth={true}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Utama
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-50}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="menu"
              smooth={true}
              offset={-50}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="review"
              smooth={true}
              offset={-50}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Ulasan
            </Link>
          </li>
          <li>
            <Link
              to="book"
              smooth={true}
              offset={-50}
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Reservasi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
