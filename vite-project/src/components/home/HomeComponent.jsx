import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

export default function HomeComponent() {
    return (
      <>
        <div className="banner-container">
          <div className="banner-content">
            <img src={logo} className='logo-img' alt='banner' />
            <div className="button-container">
              <Link to="/category/Maquinarias">
                <button className="btn btn-primary custom-button">Maquinarias</button>
              </Link>
              <Link to="/category/Repuestos">
                <button className="btn btn-primary custom-button">Repuestos</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}
  