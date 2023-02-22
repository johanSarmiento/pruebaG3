import "./style.css"
function render(documentHtml, innerHtml) {
  documentHtml.innerHTML = innerHtml
}
function cambiarRender(documentHtml,innerHtml) {
    document.getElementById("app").remove()
    render(documentHtml,innerHtml)
    document.getElementById("inicio").addEventListener("click", ()=>{
        cambiarRender(document.querySelector("body"), inicio)
    })
    
    document.getElementById("cliente").addEventListener("click", ()=>{
        cambiarRender(document.querySelector("body"), clientes)
    })
    
    document.getElementById("credito").addEventListener("click", ()=>{
        cambiarRender(document.querySelector("body"), credito)
    })
}

const inicio = ` 
<div id="app">
    <div class='contenedor left-contenedor'>
        <div class="contenedor navbar-contenedor">
            <div class="contenedor icon-contenedor">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="76" height="76" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <circle cx="12" cy="7" r="4" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
</svg>
                <h2>ADMIN</h2>
            </div>
            <div class="contenedor lista-contenedor">
                <ul class="contenedor lista">
                    <li><a id='inicio' href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <rect x="10" y="12" width="4" height="4" />
                    </svg>
                        Inicio</a></li>
                    <li><a id="cliente" href="#"> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                    Cliente</a></li>  
                    <li><a id="credito" href="#"> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dollar" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                    <path d="M12 3v3m0 12v3" />
                  </svg>
                    Credito</a></li>
                </ul>
                <button class="botonSesion">Cerrar Sesion</button>
            </div>
        </div>
        </div>
        <div class='contenedor right-contenedor'>
        <div class="contenedor inicio-contenedor">
            <h1 class="tituloInicio">inicio</h1>
        </div>
        <div class="contenedor carta-contenedor">  
        <div class="contenedor creditos-contenedor">
            <div class="contenedor left-creditos">
                <p>Creditos</p>
                <p class="datos">31</p>
            </div>
            <div class="contenedor icon-contenedor">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <line x1="7" y1="15" x2="7.01" y2="15" />
            <line x1="11" y1="15" x2="13" y2="15" />
          </svg>
            </div>
        </div>
        <div class="contenedor clientes-contenedor">
            <div class="contenedor top-clientes">
                <p>Creditos</p>
                <p class="datos">32</p>
            </div>
            <div class="contenedor icon-contenedor">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-check" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 11l2 2l4 -4" />
          </svg>
            </div>
        </div>
        </div>
    </div>
</div>
`
const clientes = `
<div id="app">
    <div class='contenedor left-contenedor'>
        <div class="contenedor navbar-contenedor">
            <div class="contenedor icon-contenedor">
                <AiOutlineUser  className="icono-user"/>
                <h2>ADMIN</h2>
            </div>
            <div class="contenedor lista-contenedor">
                <ul class="contenedor lista">
                    <li><a id='inicio' href="#"><AiFillHome />Inicio</a></li>
                    <li><a id="cliente" href="#"><AiOutlineUser /> Cliente</a></li>  
                    <li><a id="credito" href="#"><BsCurrencyExchange /> Credito</a></li>
                </ul>
                <button class="botonSesion">Cerrar Sesion</button>
            </div>
        </div>
    </div>
        <div class='contenedor right-contenedor'>
            <div class="contenedor inicio-contenedor">
                <h1 class="tituloInicio">Clientes</h1>
            </div>
            <div class= "contenedor pag-clientes-contenedor">
                <div class ="contenedor crear-contenedor">
                    <input type="text" class="buscar" placeholder="Nombre,NIT o CC">
                    <button class="botonCliente">Crear Usuario</button>
                </div>
                <ul class="contenedor datos-contenedor">
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>NIT/CC</li>
                    <li>Direccion</li>
                    <li>ciudad</li>
                    <li>Telefono</li>
                    <li>Cupo disponible</li>
                    <li>estado</li>
                    <li>Acciones</li>
                </ul>
                <ul class="contenedor baseDatos">
                    <li>Johan stevan</li>
                    <li>Sarmiento cacua</li>
                    <li>51684846</li>
                    <li>calle 54 6546 </li>
                    <li>bucaramanga</li>
                    <li>168468165</li>
                    <li>85.555.5555</li>
                    <li>activo</li>
                    <li>eliminar</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`

render(document.querySelector("body"), inicio)

document.getElementById("inicio").addEventListener("click", ()=>{
    cambiarRender(document.querySelector("body"), inicio)
})

document.getElementById("cliente").addEventListener("click", ()=>{
    cambiarRender(document.querySelector("body"), clientes)
})

document.getElementById("credito").addEventListener("click", ()=>{
    cambiarRender(document.querySelector("body"), credito)
})