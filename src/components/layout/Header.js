import { BrowserRouter as Router } from 'react-router-dom';
import '../../styles/components/layout/Header.css';


const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <div className="encabezado">
          <Router>
            <a href="/" rel="noreferrer">
              <img className="logo" src="/logo.png" width="100" alt="Mi/Gu AU Refugio" />
              <h1>Mi/Gu AU Refugio</h1>
            </a>
          </Router>
          
          <Router>
            <a href="https://www.facebook.com/" rel="noreferrer">
            <img className="logos" src="/img/home/facebook.png" width="30" alt="facebook" /></a>
          </Router>
          <Router>
            <a href="https://www.instagram.com/" rel="noreferrer">
            <img className="logos" src="/img/home/instagram.png" width="30" alt="instagram" /></a>
          </Router>
          <Router>
            <a href="https://web.whatsapp.com/" rel="noreferrer">
            <img className="logos" src="/img/home/whatsapp.png" width="30" alt="whatsapp" /></a>
          </Router>
          <Router>
            <a href="/admin/login" rel="noreferrer">
            <img className="logos" src="/img/home/admin.png" width="30" alt="admin" /></a>
          </Router>
        </div>
      </div>
    </header>
  );
}

export default Header;