import  { useState } from 'react';
import NavbarItem from '../Components/NavbarItem';

const Panel = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
        <button
            onClick={() => setOpen(!isOpen)}
            className={`hamburger-button ${isOpen ? 'open' : 'close'}`}>
        </button>
    <div className={`panel ${isOpen ? 'open' : 'close'}`}>
        <div className="burger-menu">
            <div>
                <NavbarItem link="/">
                    Apie produktą
                </NavbarItem>
            </div>
            <div>
                <NavbarItem link="/partners">
                    Partneriai
                </NavbarItem>
            </div>
            <div>
                <NavbarItem link='/buy'>
                    Įsigyti
                </NavbarItem>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Panel;
