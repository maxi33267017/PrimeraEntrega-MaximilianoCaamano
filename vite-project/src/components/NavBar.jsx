// import PropTypes from 'prop-types';
import CartWidget from './CartWidget';
const Navbar = ({ links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/home">Patagonia Maquinarias</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
          <CartWidget/>
        </div>
      </div>
    </nav>
  );
};

// Navbar.propTypes = {
//   links: PropTypes.arrayOf(
//     PropTypes.shape({
//       url: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default Navbar;