import logo from '../img/logo.png';
import logoDark from '../img/logo-dark.png';
import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import SwitchToggle from './Switch';

const Header = ( {toggleTheme, checked, theme } ) => {
  return (
    <header className="header">
        <Link to='/' className="header__logo">
            <img src={ theme === 'light' ? logoDark : logo } alt="App Logo" className='header__img'/>
            <p className='header__text'>Dennis Kim | Web Developer</p>
        </Link>
        <div className='header__navigation'>
          <NavMain toggleTheme={toggleTheme} checked={checked} theme={theme}/>        
          <SwitchToggle toggleTheme={toggleTheme} checked={checked} theme={theme}/>
        </div>
    </header>
  )
}

export default Header;