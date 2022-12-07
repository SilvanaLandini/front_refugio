import { Link } from 'react-router-dom';
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          {/* <li><Link to="/">Index</Link></li> */}
          <li><Link to="/adopciones">Adopciones</Link></li>
          <li><Link to="/manada">Nuestra manada</Link></li>
          <li><Link to="/ayudar">Como ayudar</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;