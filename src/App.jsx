import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import Navbar from './componentes/navbar.jsx'
import Inicio from "./componentes/inicio"
import Clientes from "./componentes/clientes"
import Creditos from "./componentes/creditos"
import { AiFillHome,AiOutlineUser } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <div className='left-contenedor'>
          <div className="contenedor navbar-contenedor">
              <div className="contenedor icon-contenedor">
                  <AiOutlineUser className='admin'/>
                  <h2>ADMIN</h2>
              </div>
              <div className="contenedor lista-contenedor">
                <ul class="lista">
                      <li><Link to="/"><AiFillHome /> Inicio</Link></li>
                      <li><Link to="/clientes" ><AiOutlineUser/> Clientes</Link></li>  
                      <li><Link to="/creditos" ><BsCurrencyExchange /> Credito</Link></li>
                  </ul>
                  <button className="botonSesion">Cerrar Sesion</button>
              </div>
          </div>
        </div>
        <div className='right-contenedor'>
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/creditos" element={<Creditos/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
