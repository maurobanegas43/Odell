import { useState, useEffect } from "react"
import { apiGet,apiPost,apiPath,apiDelete} from "../Appi"
import { data } from "react-router-dom"

import './Accesorio.css'



const Accesorios=()=>{
    const [cardAccesorio , setCardAccesorio]= useState([])
    
    const [cardUpdate,setCardUpdate]=useState({
        cantidad:'',
        imagen:'',
        descripcion:''

    })  
    
const [accesorioUpdate,setAccesorioUpdate]=useState(false)


const modificarEnviar= async(id)=>{
    const cambiar = await apiPath(`accesorio/update/${id}`,cardUpdate) 
    setCardUpdate({
        cantidad:'',
        imagen:'',
        descripcion:''
    })

}

const cambiar=()=>{
    setCardUpdate({
        ...cardUpdate,
        [e.target.name]:e.target.value
    })
}





useEffect(()=>{
    const fetchAccesorios=async()=>{
    const data = await apiGet("/accesorios")
    if(!data){
        return console.error("Error al mostrar accesorios");
        
    }
setCardAccesorio(data)

}
fetchAccesorios()
},[])



const borrarAccesorio=(id)=>{
    const filtrar= cardAccesorio.filter(accesorio=> accesorio.id != id)
    setCardAccesorio(filtrar)

    try {
    const resquest =apiDelete(`/accesorio/delete/${id}`) 

        
    } catch (error) {

        console.log("No se borro")
        
    }

}




return(

<div className="accesorio-main">
 


   {cardAccesorio.map(alumnaAccesorio =>(   
            <div  className="principal-accesorio">
            <section className="section-accesorio">
              <img src={alumnaAccesorio.imagen}  />
              
              <div className="botones-accesorio">
              <button
              onClick={()=>{
                setAccesorioUpdate(true)

              }}
              
                        
              >Actualizar</button>

              {accesorioUpdate &&(
                              <div>

      <section className="section-accesorios" key={cardAccesorio.id}>
      <form>
        
        <label>Cantidad Disponible</label>
        <input
        name="cantidad"
        value={cardUpdate.cantidad}
        onChange={cambiar}
        
        
        ></input>
        <label>Descripcion</label>
        <input
        name="descripcion"
        value={cardUpdate.descripcion}
        onChange={cambiar}
        
        ></input>
            
        <label>Imagen:</label>
        <input
        name="imagen"
        value={cardUpdate.imagen}
        onChange={cambiar}
        
        ></input>

        <button onClick={(e)=>{
            handleEnviarAccesorio(e)
        }}></button>
        </form>
    </section>
                                








                              </div>
                            )}




              <button 
              onClick={()=>{borrarAccesorio(alumnaAccesorio.id)}}  >Borrar</button>
              <button>Vender</button>
              </div>
              
            
              <h2>{alumnaAccesorio.nombre}</h2>
              <h3>Cantidad disponible :{alumnaAccesorio.cantidad}</h3>
              <h3>Descripcion:{alumnaAccesorio.descripcion}</h3>
              
                 </section>
          </div>))}








</div>


    
)

      
}

export default Accesorios;