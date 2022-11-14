import { useState } from "react";
import {Link} from'react-router-dom';
import Router from './router/Router'

const Ejemplo =()=>{

    // const nombre = "Isabel";
const[nombre,setNombre] =useState("Isabel");

//hook de useState
const cambiarNombre=(nuevo)=>{
    setNombre(nuevo)
}

    return(
        <div>
            <h1>Primer componente</h1>
            <p>Mi nombre es: <strong className={nombre.length <4 ? 'verde' : 'azul'}>{nombre}</strong></p>
            <p>Mi apellido es:</p>

            <input type="text" placeholder="cambia el nombre" onChange={e=>cambiarNombre(e.target.value)} />

            <button onClick={e=>cambiarNombre("Elena")}>Cambiar nombre</button>
        </div>
    )
}

export default Ejemplo;