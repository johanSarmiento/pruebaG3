import React from "react";
import "../style/cartas.css"
import { AiFillCreditCard ,AiOutlineUserAdd} from "react-icons/ai";

function Cartas({Clientes,Creditos}) {
    return(
        <div class="contenedor carta-contenedor">  
            <div class="contenedor creditos-contenedor">
                <div class="contenedor left-creditos">
                    <p>Creditos</p>
                    <p class="datos">31</p>
                </div>
                <div class="contenedor icon-contenedor">
                    <AiFillCreditCard  className="iconC"/>
                </div>
            </div>
            <div class="contenedor clientes-contenedor">
                <div class="contenedor top-clientes">
                    <p>Creditos</p>
                    <p class="datos">32</p>
                </div>
                <div class="contenedor icon-contenedor">
                    <AiOutlineUserAdd  className="iconC CC"/>
                </div>
            </div>
        </div>
    )
}

export default Cartas;