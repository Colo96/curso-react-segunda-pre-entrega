import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return(
        <nav className="navBar">
            <span className="containerLogo"></span>
            <ul className="elementosMenu">
                <li>
                    <a href="/">
                       Home
                    </a>
                </li>
                <li>
                   <a href="/">
                       Locales
                   </a>
                </li>
                <li>
                    <a href="/">
                       Nosotros
                    </a>
                </li>
                <li>
                    <a href="/">
                       Contacto
                    </a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}