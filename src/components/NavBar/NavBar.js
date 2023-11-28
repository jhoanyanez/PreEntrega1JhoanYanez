import CartWidget from "../CartWidget/CartWidget"
import brand from "./img/arawakcell.png";
import {NavLink, Link} from "react-router-dom";

//function NavBar (props) {

const NavBar = () =>{
    return (
        <nav className="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <a className="navbar-item" href="/">
              <img src={brand} width="112" height="28"/>
              </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                <Link to="nosotros">Nosotros</Link>
              </a>

              <a className="navbar-item">
                <NavLink to={`/category/smartphones`}>Smartphones</NavLink>
              </a>

              <a className="navbar-item">
                <NavLink to={`/category/notebooks`}>Notebooks</NavLink>
              </a>

              <a className="navbar-item">
                <NavLink to={`/category/tablets`}>Tablets</NavLink>
              </a>

              <a className="navbar-item">
                <NavLink to={`/category/accesorios`}>Accesorios</NavLink>
              </a>

              <a className="navbar-item">
                <Link to="reparaciones">Reparaciones</Link>
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                  <CartWidget/>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default NavBar;
