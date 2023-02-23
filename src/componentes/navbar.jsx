import React from "react";
import "../style/navbar.css"

function Navbar() {
    <div class="contenedor navbar-contenedor">
            <div class="contenedor icon-contenedor">
                <h2>ADMIN</h2>
            </div>
            <div class="contenedor lista-contenedor">
                <ul class="contenedor lista">
                    <li><a id='inicio' href="#">Inicio</a></li>
                    <li><a id="cliente" href="#">Cliente</a></li>  
                    <li><a id="credito" href="#">Credito</a></li>
                </ul>
                <button class="botonSesion">Cerrar Sesion</button>
            </div>
    </div>
}

export default Navbar;