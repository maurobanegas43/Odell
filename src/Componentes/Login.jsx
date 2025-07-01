import './Login.css';
import { useState } from 'react';


const Login=()=>{

  
     
   return(
    <>
   <div className='login-registro'>
        <section className='login-registro-section'>
            <h2>Registro</h2>
            <label>Nombre</label><input></input>
            <label>Apellido</label><input></input>
            <label>Fecha de Nacimiento</label><input type='date'></input>
            <label>Gmail</label><input type='gmail'></input>
            <label>Telefono</label><input></input>
            <label>Direccion</label><input></input>
            <button >Inscribir Alumna</button>
            


        </section>
    </div>




    

</>



   );

};
export default Login;