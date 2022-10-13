import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return(
        <nav className="navBar">
            <span className="containerLogo"></span>
            <ul className="elementosMenu">
                <li>
                    <NavLink to="/">
                       Home
                    </NavLink>
                </li>
                <li>
                   <NavLink to="/locales">
                       Locales
                   </NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros">
                       Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">
                       Contacto
                    </NavLink>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}