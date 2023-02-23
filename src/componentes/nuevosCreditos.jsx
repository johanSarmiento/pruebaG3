import React from "react";
import "../style/nuevosCreditos.css"

function Nuevos() {
    return(
        <div className="contenedor nuevos-contenedor">
            <div className="boton-contenedor">
                <button className="botonNuevos">Atras</button>
            </div>
            <div className="contenedor formulario-contenedor">
                <h2 className="tituloNuevo">Datos Personales</h2>
                <form className="contenedor formulario">
                    <div className="contenedor left-formulario">
                        <label>Nombre
                            <input type="text" name="nombre" placeholder="Nombre" />
                        </label>

                        <label>Apellido
                            <input type="text" name="nombre" placeholder="Apellido" />
                        </label>

                        <label>NIT/CC
                            <input type="text" name="nombre" placeholder="NIT/CC" />
                        </label>

                        <label>Direccion
                            <input type="text" name="nombre" placeholder="Direccion" />
                        </label>

                        <label>Ciudad
                            <select>
                                <option value="value0"selected >Seleccionar </option>
                                <option value="value1">Bucaramanga</option>
                                <option value="value2">bogota</option>
                                <option value="value3">Medellin</option>
                            </select>
                        </label>

                        <label>Telefono
                            <input type="text" name="nombre" placeholder="Telefono" />
                        </label>

                        <label>contacto
                            <input type="text" name="nombre" placeholder="contacto" />
                        </label>
                        <button className="botonNuevos btn">Guardar Contacto</button>
                    </div>
                    
                    <div className="contenedor right-formulario">
                        <label>Cupo Total
                            <input type="text" name="nombre" placeholder="Cupo Total" />
                        </label>

                        <label>Cupo disponible
                            <input type="text" name="nombre" placeholder="Cupo disponible" />
                        </label>

                        <label>Dias de gracia
                            <input type="text" name="nombre" placeholder="Dias de gracia" />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Nuevos;