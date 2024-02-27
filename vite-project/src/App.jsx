import './App.css';

import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import logoImage from './assets/img/logo.png';

function App() {
  const navLinks = [
    { url: '/contacto', text: 'Contacto' },
    { url: '/productos', text: 'Productos' },
    { url: '/nosotros', text: 'Nosotros' },
  ];

  return (
    <>
      <Navbar links={navLinks} />
      <div>
      <img src={logoImage} alt="Logo" className="logo-img" />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
    </>
    
  );
}

export default App;