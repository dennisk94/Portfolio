import { Link } from 'react-router-dom';

const NavMain = () => {
  return (
    <nav className="header__nav">
            <ul className="header__ul">
                <li className="header__li">
                    <Link to='/' className="header__a">Home</Link>
                </li>
                <li className="header__li">
                    <Link to='/about' className="header__a">About</Link>
                </li>
                <li className="header__li">
                    <Link to='/projects' className="header__a">Projects</Link>
                </li>
                <li className="header__li">
                    <Link to='/contact' className="header__a">Contact</Link>
                </li>
            </ul>
    </nav>
  )
}

export default NavMain;