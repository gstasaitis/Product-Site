// Navbar.jsx
import { useState, useRef } from 'react';
import NavbarItem from './NavbarItem';
import useOnClickOutside from '../Modules/useOnClickOutside';
import Panel from '../Modules/Panel';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useOnClickOutside(node, closeMenu);

  return (
    <nav>
      <div className="navbar-container" ref={node}>
        <NavbarItem link='/'>
          <div className="logo"></div>
        </NavbarItem>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <NavbarItem link="/">Apie produktą</NavbarItem>
          <NavbarItem link="/partners">Partneriai</NavbarItem>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <Panel/>
          <NavbarItem link='/buy'>
            <div className="buy-button">
              <button className='buy-now'>Įsigyti</button>
            </div>
          </NavbarItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
