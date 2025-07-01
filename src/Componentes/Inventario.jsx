import React from "react"
import { useState } from "react"
import './Inventario.css'


const Inventario=()=>{
    const [vestido,setVestido]=useState("")

    const vestuarios=[
        {id:'1', Nombre:'vestido clasico', Temporada:' Verano', Color:'turquesa', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-19 21-47-23.png',Grupo:'juvenil',Año:'2025'},
        {id:'2', Nombre:'vestido clasico', Temporada:'otoño', Color:'verde ', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-09 21-59-16.png', Grupo:'infatil',Año:'2025'},
        {id:'3', Nombre:'vestido español', Temporada:'verano', Color:'rojo', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-19 21-46-54.png',Grupo:'infantil',Año:'2024'},
        {id:'4', Nombre:'vestido clasico', Temporada:'primavera', Color:'turquesa', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-09 22-01-37.png',Grupo:'Ingresantes',Año:'2023'},
        {id:'1', Nombre:'vestido clasico', Temporada:' Verano', Color:'turquesa', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-19 21-47-23.png',Grupo:'juvenil',Año:'2025'},
        {id:'2', Nombre:'vestido clasico', Temporada:'otoño', Color:'verde ', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-09 21-59-16.png', Grupo:'infatil',Año:'2025'},
        {id:'3', Nombre:'vestido español', Temporada:'verano', Color:'rojo', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-19 21-46-54.png',Grupo:'infantil',Año:'2024'},
        {id:'4', Nombre:'vestido clasico', Temporada:'primavera', Color:'turquesa', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-09 22-01-37.png',Grupo:'Ingresantes',Año:'2023'}, 
        {id:'1', Nombre:'vestido clasico', Temporada:' Verano', Color:'turquesa', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-19 21-47-23.png',Grupo:'juvenil',Año:'2025'},
        {id:'2', Nombre:'vestido clasico', Temporada:'otoño', Color:'verde ', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-09 21-59-16.png', Grupo:'infatil',Año:'2025'},
        {id:'3', Nombre:'vestido español', Temporada:'verano', Color:'rojo', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-19 21-46-54.png',Grupo:'infantil',Año:'2024'},
        {id:'4', Nombre:'vestido clasico', Temporada:'primavera', Color:'turquesa', Talle:'s',Estilo:'Corte recto',Imagen:'/Captura de pantalla de 2025-06-09 22-01-37.png',Grupo:'Ingresantes',Año:'2023'}

    ]
    //no estoy tan seguro si tendria que tener relacion con las alumnas o el grupo que uso tal vestido
const searchVestido=()=>{
    
}
const [mostrar,setMostrar]=useState({
    temporada:false,
    color:false,
    grupo:false,
    talle:false,
    estilo:false


})

const handleSide=(nombre)=>{
    setMostrar(usar =>({
        ...usar,
        [nombre]:!usar[nombre]

    }))
}


    return(
        <div className="main">
           
             <aside className="sidebar">
        <h3>Categorías</h3>
        <ul>
            <section className="section-categoria">
          
            <li onClick={()=>{handleSide("temporada")} }  style={{ cursor: "pointer" }}>
                Temporada{ 
            mostrar.temporada &&(
                <ul>
            <li>Verano</li>
            <li>Otoño</li>
            <li>Primavera</li>
            <li>Invierno</li>
</ul>)}
           </li>
           </section>
           <section className="section-categoria">
                       <li onClick={()=>{handleSide("color")}} style={{ cursor: "pointer" }}>
                Color{ 
            mostrar.color &&(
                <ul>
            <li>Verde</li>
            <li>Rojo</li>
            <li>Azul</li>
            <li>Amarillo</li>
</ul>)}
  
           </li>
           </section>

           <section className="section-categoria">
    
           <li onClick={()=>{handleSide("talle")}} style={{ cursor: "pointer" }}>
                Talla{ 
            mostrar.talle &&(
                <ul>
                     <li>S</li>
                     <li>L</li>
                     <li>M</li>
                     <li>X</li>
</ul>)}
</li>
</section>
          <section className="section-categoria">
           <li onClick={()=>{handleSide("grupo")}} style={{ cursor: "pointer" }}>
                Grupo{ 
            mostrar.grupo &&(
                <ul>
                     <li>Infantil</li>
                     <li>Juvenil</li>
                     <li>A</li>
                     <li>B</li>
</ul>)}



      </li>     
      </section>


        </ul>
      </aside>


                       
                <div className="contenido">
                {vestuarios.map( vestuario=>(
                    <div className="principal">
                    <section key={vestuario.id} className="section-principal">
                                    <img src={vestuario.Imagen}></img>
                                    <h3>{vestuario.Nombre}</h3>

                    </section>
                    <section className="section-descripcion">
                        <h2>{vestuario.Nombre}</h2>
                        <label>Temporada:{vestuario.Temporada} </label>
                        <label>Grupo:{vestuario.Grupo} </label>
                        <label>Talle:{vestuario.Talle} </label>
                        <label>Año:{vestuario.Año} </label>



                    </section>
                    </div>

                    




                )
            



                )}
                </div>
            
                
        
     </div>
    )
}

export default Inventario;