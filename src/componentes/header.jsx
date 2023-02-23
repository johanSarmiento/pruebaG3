import React from "react";
import "../style/header.css"

function Header( {titulo} ) {
    return(
        <div className="contenedor inicio-contenedor">
            <h1 className="tituloInicio">{titulo}</h1>
        </div>
    )
}

export default Header;