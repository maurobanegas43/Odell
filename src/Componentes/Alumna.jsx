import { useEffect, useState } from 'react'
import { apiGet } from '../Appi'



 const Alumna =()=>{

  const [alumna, setUser]= useState([])

 useEffect(() => {
    const fetchAlumna= async () => {
      const data = await apiGet('/alumnas');
      setUser(data);
    };

    fetchAlumna();
  }, []);


return(


  <div>
{alumna.map((user) =>(<div key={user.id}>
   <div key={user.id} className="principal">
            <section className="section-principal">
              <img src={user.imagen}  />
             
            </section>
            <section className="section-descripcion">
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
)

}
export default Alumna;
