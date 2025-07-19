import { useEffect, useState } from 'react'
import { apiGet } from '../Appi'
import './Alumna.css'




 const Alumna =()=>{

  const [alumna, setUser]= useState([])

 useEffect(() => {
    const fetchAlumna= async () => {
      const data = await apiGet('/alumnas');
      setUser(data);
    };

    fetchAlumna();
  }, []);

const buscarAlumna=(index)=>{
  index=0
 
}








return(

  <div className='box'>
  <input className='input-search-alumna' placeholder='Buscar Alumna'></input>
  <div className="alumna-container">
    
    
{alumna.map((user) =>(<div key={user.id}>
   <div key={user.id} className="principal-alumna">
            <section className="section-principal-alumna">
              <img src={user.imagen}  />
             
            </section>
            <section className="section-descripcion-alumna">
              <h2>{user.nombre}</h2>
              <p>Apellido: {user.apellido}</p>
              <p>Dni: {user.dni}</p>
              <p>Gmail: {user.gmail}</p>
              <p>Fecha de Nacimiento: {user.fechaNacimiento}</p>
              <p>Telefono: {user.telefono}</p>
              <p>Direccion: {user.direccion}</p>
              

            </section>
          </div>

</div>
    

))}



  </div>
  </div>
)

}
export default Alumna;
