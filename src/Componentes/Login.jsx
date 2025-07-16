import './Login.css';
import { useState } from 'react';
import Header from './Header';

const Login=({setProtegida})=>{

 
  // faltar agregar botones al inventario para agregar nuevo vestido 
  // falta agregar botones para la creacion de un nuevo comprobante 
  // falta revision de Ortografia de ciertas palabras 
  // falta verificar funcionalidades o la necesidad de mas funciones
  // el lunes ir a mostrar la version beta con suerte como este
  // cambiar o corregir la parte estetica no me convencen los colores modificar en otra rama la estetica para rpobar diferentes combinaciones
  //  darle funcionalida de busqueda al header para el componente alumna 
  
const [data , setData]=useState({
    nombre : '',
    apellido : '',
    fechaNacimiento : '',
    gmail : '',
    dni:'',
    telefono : '',
    direccion : ''
    

})


const handleInscribir =( e) =>{
    setData({
    ...data,
    [e.target.name]: e.target.value

    })

}

const handleEnvio = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/newAlumna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const convertir = await response.json();
      console.log("Funciona", convertir);

      setData({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        gmail: '',
        dni: '',
        telefono: '',
        direccion: ''
      });
    } catch (error) {
      console.log("Error al enviar datos ", error);
    }
  };


   
   return(
    <div className='principal-login'>
   
   <div className='login-registro'>
        <section className='login-registro-section'>
            <h2>Registro Nueva Alumna </h2>
            <label>Nombre</label><input
            name='nombre'
            value={data.nombre}
            onChange={handleInscribir}>

            </input>
            <label>Apellido</label><input
            name='apellido'
            value={data.apellido}
            onChange={handleInscribir}

            ></input>
            <label>Fecha de Nacimiento</label><input type='date'
            name='fechaNacimiento'
            value={data.fechaNacimiento}
            onChange={handleInscribir}

            ></input>
            <label>Dni</label><input
            name='dni'
            value={data.dni}
            onChange={handleInscribir}

            ></input>

            <label>Gmail</label><input 
            name='gmail'
            value={data.gmail}
            onChange={handleInscribir}>

            </input>
            <label>Telefono</label><input
            name='telefono'
            value={data.telefono}
            onChange={handleInscribir}>
           
            </input>
            <label>Direccion</label>
            <input
                  name='direccion'
                  value={data.direccion}
                  onChange={handleInscribir}>

            </input>
            <button  onClick={handleEnvio}>Inscribir Alumna</button>
            
        </section>
    </div>

</div>



   );

};
export default Login;





