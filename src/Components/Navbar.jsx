import { useState } from 'react';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <NavbarItem link='/'><div className="logo"></div></NavbarItem>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <NavbarItem link="/">Apie produktą</NavbarItem>
          <NavbarItem link="/partneriai">Partneriai</NavbarItem>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
        <div className="buy-button">
            <button className='buy-now'>Įsigyti</button>
        </div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
