import React from "react"

const NavBar = () => {
    return (
        <div class="container">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">My e-commerce</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" href="#">Catalogo</a>
                <a class="nav-link" href="#">Ofertas</a>
                <a class="nav-link" href="#">Quienes somos</a>
                <a class="nav-link" href="#">Contacto</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      )
}

export default NavBar