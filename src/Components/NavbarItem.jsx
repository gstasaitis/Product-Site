import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavbarItem = ({ link, children }) => {
  return (
    <Link to={link} className="navbar-item">
      {children}
    </Link>
  );
};

NavbarItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavbarItem;
