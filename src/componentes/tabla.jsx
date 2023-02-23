import React from "react";
import "../style/tabla.css"
import { AiOutlineSearch,AiOutlineUserSwitch,AiFillDelete } from "react-icons/ai";

function Tabla(params) {
    return(
        <div className="contenedor tabla-contenedor">
            <div className="contenedor buscar-contenedor">
                <div className="cajaBuscar">
                <input type="text" className="buscarTabla" placeholder="Nombre,NIT o CC" />
                    <AiOutlineSearch  className="lupa"/>
                </div>
                <button className="botonTabla">Crear Cliente</button>
            </div>
            <div className="contenedor tablas-contenedor">
                <table className="tabla">
                    <tr className="tituloTabla">
                        <th className="tabla1">Nombre</th>
                        <th>Apellido</th>
                        <th>NIT/CC</th>
                        <th>Direccion</th>
                        <th>Ciudad</th>
                        <th>Telefono</th>
                        <th>Cupo Disponible</th>
                        <th>Estado</th>
                        <th className="tabla2">Acciones</th>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                    <tr className="contenedio">
                        <td>Johan Stevan</td>
                        <td>Sarmiento cacua</td>
                        <td>432523634623</td>
                        <td>calle 545 5454</td>
                        <td>bucaramanga</td>
                        <td>45345353</td>
                        <td>62462346234623</td>
                        <td>acitivo</td>
                        <td><AiOutlineUserSwitch className="iconTa"/> <AiFillDelete  className="iconTa"/></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Tabla;