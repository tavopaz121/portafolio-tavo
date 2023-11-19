import { useState } from "react";
import { handleLinkClick } from "../config/activesLinks";

import "../styles/Header/Header.scss";

const navLinks = [
  { name: "home", label: "Inicio" },
  { name: "about", label: "Resumen" },
  { name: "skills", label: "Skills" },
  { name: "projects", label: "Proyectos" },
  { name: "contact", label: "Contacto" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("");

  const menuBurger = () => {
    const burgerMenu = document.getElementById("burger");
    const navbarMenu = document.getElementById("menu");

    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a
          onClick={() => handleLinkClick("home", setActiveLink)}
          className="brand"
        >
          Tavopaz
        </a>
        <div className="burger" id="burger" onClick={menuBurger}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className="menu" id="menu">
          <ul className="menu-inner">
            {navLinks.map((link) => (
              <li key={link.name} className="menu-item">
                <a
                  onClick={() => handleLinkClick(link.name, setActiveLink)}
                  className={`menu-link ${
                    activeLink === link.name ? "active" : null
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="" className="menu-block">
          Blog
        </a>
      </nav>
    </header>
  );
}
