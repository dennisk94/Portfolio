import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import NavMain from './NavMain';

const Header = () => {
  return (
    <header className="header">
        <Link to='/' className="header__logo">
            <img src={logo} alt="App Logo" className='header__img'/>
            <p className='header__text'>Dennis Kim | Web Developer</p>
        </Link>
        <NavMain />        
    </header>
  )
}

export default Header;