import CartWidget from "../CartWidget/CartWidget"
import brand from "./img/arawakcell.png";

//function NavBar (props) {

const NavBar = () =>{
    return (
        <nav className="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <a className="navbar-item" href="#">
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
                Home
              </a>

              <a className="navbar-item">
                Nosotros
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link navbar-item">
                  Productos
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    Móviles
                  </a>
                  <a className="navbar-item">
                    Notebooks
                  </a>
                  <a className="navbar-item">
                    Tablets
                  </a>
                  <hr className="navbar-divider"/>
                  <a className="navbar-item">
                    Accesorios
                  </a>
                </div>
              </div>
              <a className="navbar-item">
                Reparaciones
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

export default NavBar









