import { getYear } from '../utilities/getDates';
import { IconGenerator } from './IconGenerator';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__links">
            <a href="https://github.com/dennisk94?tab=repositories" target="_blank" rel="noopener noreferrer" className='footer_github'>
              { IconGenerator('github') }
            </a>

            <a href="https://www.linkedin.com/in/dennis-kim-61825b237" target="_blank" rel="noopener noreferrer">
              { IconGenerator('linkedin')}
            </a>
        </div>
        <p className="footer__copy">
            &copy; { getYear() } || Dennis Kim
        </p>
    </footer>
  )
}

export default Footer;