import { useState, useEffect } from "react"
import { apiGet,apiPost,apiPath } from "../Appi"

const Accesorios=()=>{
    const [cardAccesorio , setCardAccesorio]= useState([])
    const [accesorio,setAccesorio]=useState({
        nombre:'',
        cantidad:'',
        descripcion:''
      
       })
      
      const [mostrarAccesorios,setMostrarAccesorios]=useState(false)
      
      const handle=(e)=>{
        setAccesorio({
            ...accesorio,
            [e.target.name]:e.target.value
        })
      }

const handleEnviar=()=>{
    const resquest=apiPost("/newAccesorio")
    if(resquest){
        console.log("Nuevo accesorio cargado en db")
    }
    setAccesorio({
        nombre:'',
        cantidad:''
    })
}


return(
<div>
    <section>
        <label>Nombre</label>
        <input
        
        name="nombre"
        value={handle}

        
        
        ></input>
        <label>Cantidad Disponible</label>
        <input
        
        
        ></input>
    </section>





</div>


    
)





      
}