import React from 'react';
import { HomeLink, AboutLink, ContactLink } from './Navlist';
import Menu from './Menu';
import { useTheme } from '../styles/ThemeProvider';
import '../styles/navbar.scss';


export default function Navbar({ sections, isMobile }) {
  const { theme } = useTheme();


  const style = {
    '--global-background': theme.background,
    '--theme-primary': theme.primary,
    '--theme-secondary': theme.secondary,
    '--theme-highlight': theme.highlight,
    '--theme-error': theme.error,
    '--theme-button': theme.button,
    '--theme-text': theme.text,
  }

  const scrollToSection = (id) => {
    const navbarHeight = window.innerHeight * .1;

    const section = document.getElementById(id);
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <div
      id="navbar"
      style={style}
    >
      <span id="wave" />
      <Menu />
      {isMobile ? null :
        <div id="navbar-button-container">
          <p className="jump-to-section">Jump To Section:</p>
          {sections.map((section) => {
            return (
              <button
                className="section-nav-button"
                key={section.id}
                onClick={() => scrollToSection(section.id)}
              >
                {section.heading}
              </button>
            )
          })}
        </div>
      }
    </div>
  )
}