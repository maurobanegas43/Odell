import { useState } from "react";
import Header from "./Header";
import './home.css'




 const Home =({setProtegida})=>{
   const [banner,setBanner]= useState(0)



   const imagenes= ['/public/imagenes_vestidos/Captura de pantalla de 2025-07-14 21-52-41.png',
      '/public/imagenes_vestidos/Captura de pantalla de 2025-07-14 21-53-12.png',
      '/public/Captura de pantalla de 2025-06-09 21-59-16.png',
      '/public/imagenes_vestidos/Captura de pantalla de 2025-07-14 21-55-37.png'

   ]

   const HandleImagen=()=>{
      if (banner < imagenes.length ){
         setBanner(banner+1)
         console.log(banner)
         if(banner === 3){
         setBanner(banner-3)
         }
      }else{
         setBanner(0)
      }
      
      
   }

    return (
    <div className="home-main">
       
        <h1>Odell</h1>
        <section >
         <img src={imagenes[banner]} onClick={HandleImagen}>
         </img>
        </section>



        


   </div>
)



}
export default Home;