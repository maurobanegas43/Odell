import { useEffect, useState } from 'react';
import { apiGet, apiDelete, apiPost, apiPath } from '../Appi';
import './Alumna.css';

const Alumna = () => {
  const [alumnas, setAlumnas] = useState([]);
  const [buscarAlumna, setBuscarAlumna] = useState([]);
  const [name, setName] = useState({
    nombre: '',
  });

  const [updateAlumna, setUpdateAlumna] = useState({
    telefono: '',
    gmail: '',
    direccion: '',
    imagen: ''
  });

  const [cambioAlumna, setCambioAlumna] = useState(false);
  const [alumnaSeleccionada, setAlumnaSeleccionada] = useState(null);

  const handleEnvio = async (id) => {
    try {
      await apiPath(`/alumna/update/${id}`, updateAlumna);
      
      // Actualizar el estado local
      const updatedAlumnas = alumnas.map(alumna => 
        alumna.id === id ? { ...alumna, ...updateAlumna } : alumna
      );
      
      setAlumnas(updatedAlumnas);
      if (buscarAlumna.length > 0) {
        const updatedBuscar = buscarAlumna.map(alumna => 
          alumna.id === id ? { ...alumna, ...updateAlumna } : alumna
        );
        setBuscarAlumna(updatedBuscar);
      }
      
      setUpdateAlumna({
        gmail: '',
        telefono: '',
        direccion: '',
        imagen: ''
      });
      setCambioAlumna(false);
      setAlumnaSeleccionada(null);
    } catch (error) {
      console.error("Error al actualizar alumna:", error);
    }
  };

  useEffect(() => {
    const fetchAlumna = async () => {
      try {
        const data = await apiGet('/alumnas');
        setAlumnas(data);
      } catch (error) {
        console.error("Error al obtener alumnas:", error);
      }
    };

    fetchAlumna();
  }, []);

  const handleInputChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value
    });
  };

  const handleInputAlumna = (e) => {
    setUpdateAlumna({
      ...updateAlumna,
      [e.target.name]: e.target.value
    });
  };

  const buscar = () => {
    const data = alumnas.filter(alumna => 
      alumna.nombre.toLowerCase().includes(name.nombre.toLowerCase())
    );
    setBuscarAlumna(data);
  };

  const borrarAlumna = async (id) => {
    const arrayAlumnas = [...alumnas];
    try {
      const nuevasAlumnas = arrayAlumnas.filter(alumna => alumna.id !== parseInt(id));
      setAlumnas(nuevasAlumnas);
      setBuscarAlumna([]);
      await apiDelete(`/alumna/delete/${id}`);
    } catch (error) {
      setAlumnas(arrayAlumnas);
      console.error("No se pudo borrar:", error);
    }
  };

  const modificarAlumna = (user) => {
    setCambioAlumna(true);
    setAlumnaSeleccionada(user);
    setUpdateAlumna({
      gmail: user.gmail || '',
      telefono: user.telefono || '',
      direccion: user.direccion || '',
      imagen: user.imagen || ''
    });
  };

  const containerAlumna = buscarAlumna.length > 0 ? buscarAlumna : alumnas;

  return (
    <div className='box'>
      <input 
        className='input-search-alumna' 
        name='nombre'    
        onChange={handleInputChange} 
        placeholder='Buscar Alumna'
        value={name.nombre}
      />
      <button onClick={buscar}>Buscar</button>
      
      <div className="alumna-container">
        {containerAlumna.map((user) => (
          <div key={user.id}>
            <div className="principal-alumna">
              <section className="section-principal-alumna">
                <img src={user.imagen} alt={`Imagen de ${user.nombre}`} />
              </section>
              <section className="section-descripcion-alumna">
                <h2>{user.nombre}</h2>
                <p>Apellido: {user.apellido}</p>
                <p>Dni: {user.dni}</p>
                <p>Gmail: {user.gmail}</p>
                <p>Fecha de Nacimiento: {user.fechaNacimiento}</p>
                <p>Telefono: {user.telefono}</p>
                <p>Direccion: {user.direccion}</p>
                <button onClick={() => borrarAlumna(user.id)}>
                  Borrar Alumna
                </button>
                <button onClick={() => modificarAlumna(user)}>
                  Actualizar
                </button>
              </section>
            </div>
            
            {cambioAlumna && alumnaSeleccionada && alumnaSeleccionada.id === user.id && (
              <div className="formulario-actualizacion">
                <section>
                  <label>Gmail</label>
                  <input
                    name='gmail'
                    value={updateAlumna.gmail}
                    onChange={handleInputAlumna}
                  />
                  <label>Telefono</label>
                  <input
                    name='telefono'
                    value={updateAlumna.telefono}
                    onChange={handleInputAlumna}
                  />
                  <label>Direccion</label>
                  <input
                    name='direccion'
                    value={updateAlumna.direccion}
                    onChange={handleInputAlumna}
                  />
                  <label>Imagen (URL)</label>
                  <input
                    name='imagen'
                    value={updateAlumna.imagen}
                    onChange={handleInputAlumna}
                  />
                  <button onClick={() => handleEnvio(user.id)}>
                    Realizar Cambios
                  </button>
                  <button onClick={() => {
                    setCambioAlumna(false);
                    setAlumnaSeleccionada(null);
                  }}>
                    Cancelar
                  </button>
                </section>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumna;