import { useState, useEffect } from "react"
import { apiGet,apiPost,apiPath,apiDelete} from "../Appi"

import './Accesorio.css'



const Accesorios=()=>{
    const [cardAccesorio , setCardAccesorio]= useState([])
    
    const [cardUpdate,setCardUpdate]=useState({
        id:'',
        cantidad:'',
        imagen:'',
        descripcion:''

    })  
    
//Este estado solo es para mostrar    
const [accesorioSeleccionado,setSelecionado]=useState(false)
//Este estado es el recibe los datos del accesorio que quiero modificar 
const [updateAccesorio,setUpdateAccesorio]= useState(null)

const modificarEnviar= async()=>{
    const cambiar = await apiPath(`/accesorio/update/${cardUpdate.id}`,cardUpdate) 
    setCardUpdate({
        id:'',
        cantidad:'',
        imagen:'',
        descripcion:''
    })
    setSelecionado(false)
    setUpdateAccesorio(null)

}

const cambiarHandle=(e)=>{
    setCardUpdate({
        ...cardUpdate,
        [e.target.name]:e.target.value
    })
}

const cambiar =(accesorio)=>{
    setSelecionado(true)
    setUpdateAccesorio(accesorio)

    setCardUpdate({
        id: accesorio.id ,
        cantidad:accesorio.cantidad||'',
        imagen:accesorio.imagen||'',
        descripcion:accesorio.descripcion||''
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
                cambiar(alumnaAccesorio)
            

              }}
              
                        
              >Actualizar</button>

{/*parte del componente que renderiza al hacer click en el button de actualizar     */}

 {updateAccesorio && alumnaAccesorio.id === updateAccesorio.id && accesorioSeleccionado && (
                              <div className="section-accesorio-update">

      <section className="section-accesorios" key={cardAccesorio.id}>
      
        
        <label>Cantidad Disponible</label>
        <input
        name="cantidad"
        value={cardUpdate.cantidad}
        onChange={cambiarHandle}
        
        
        ></input>
        <label>Descripcion</label>
        <input
        name="descripcion"
        value={cardUpdate.descripcion}
        onChange={cambiarHandle}
        
        ></input>
            
        <label>Imagen:</label>
        <input
        name="imagen"
        value={cardUpdate.imagen}
        onChange={cambiarHandle}
        
        ></input>

        <button onClick={()=>{
            modificarEnviar()
            
        }}>modificar</button>
        
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