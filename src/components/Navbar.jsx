import React from "react";
import Cartwidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">My e-commerce</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="#">Catalogo</a>
                <a className="nav-link" href="#">Ofertas</a>
                <a className="nav-link" href="#">Quienes somos</a>
                <a className="nav-link" href="#">Contacto</a>
                <a className="nav-link" href="#"><Cartwidget /></a>
            
              </div>
            </div>
          </div>
        </nav>
      </div>
      )
}

export default NavBar