import React, { useState, useEffect } from "react";
import './Inventario.css';
import { apiGet, apiDelete, apiPost } from "../Appi";
import Header from "./Header";

//Ahacer que el botton Agregar vestido sea desplegable
//Agregar button para hacer Accesorios 

const Inventario = ({setProtegida}) => {
  const [vestidos, setVestidos] = useState([]);

  const [vestido, setVestido] = useState({
    nombre: '',
    temporada: '',
    color: '',
    grupo: '',
    talle: '',
    estilo: '',
    imagen: '',
    año: ''
  });

  const [mostrar, setMostrar] = useState({
    temporada: false,
    color: false,
    grupo: false,
    talle: false,
    estilo: false
  });

  const [filtrar, setFiltrar] = useState({
    temporada: '',
    color: '',
    grupo: '',
    talle: '',
    estilo: ''
  });


  const handleRecibir = async()=>{
      const data = await apiGet("/vestidos")
      setVestidos(data)
      if (!data){
        return Error("error",error)
      }
      

    }


  useEffect(() => {
  
    handleRecibir();
    
  }, []);

  

  const handleEnviar = async (e) => {
    e.preventDefault();
    try {
      const resquest = await apiPost('/newVestido' , vestido);
      console.log('vestido enviado:', resquest);
      handleRecibir()  // Actualiza lista luego de crear
      setVestido({ // Limpia formulario
        nombre: '',
        temporada: '',
        color: '',
        grupo: '',
        talle: '',
        estilo: '',
        imagen: '',
        año: ''
      });
    } catch (error) {
      console.log('Error al enviar', error);
    }
  };

  const handleFiltrar = (campo, valor) => {
    setFiltrar({
      ...filtrar,
      [campo]: valor
    });
  };

  const filtro = () => {
    return vestidos.filter((valor) => (
      (filtrar.grupo === '' || valor.grupo === filtrar.grupo) &&
      (filtrar.estilo === '' || valor.estilo === filtrar.estilo) &&
      (filtrar.color === '' || valor.color === filtrar.color) &&
      (filtrar.talle === '' || valor.talle === filtrar.talle) &&
      (filtrar.temporada === '' || valor.temporada === filtrar.temporada)
    ));
  };

  const handleSide = (nombre) => {
    setMostrar(prev => ({
      ...prev,
      [nombre]: !prev[nombre]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVestido({
      ...vestido,
      [name]: value
    });
  };

  const limpiarFiltros = () => {
    setFiltrar({
      temporada: '',
      color: '',
      grupo: '',
      talle: '',
      estilo: ''
    });
  };

  return (
    <div className="main">
      <aside className="sidebar">
        <h3>Categorías</h3>
        <ul>

          <section className="section-categoria">
            <li onClick={() => handleSide("temporada")} style={{ cursor: "pointer" }}>
              Temporada
              {mostrar.temporada && (
                <ul>
                  <li onClick={() => handleFiltrar('temporada', 'Verano')}>Verano</li>
                  <li onClick={() => handleFiltrar('temporada', 'Otoño')}>Otoño</li>
                  <li onClick={() => handleFiltrar('temporada', 'Primavera')}>Primavera</li>
                  <li onClick={() => handleFiltrar('temporada', 'Invierno')}>Invierno</li>
                </ul>
              )}
            </li>
          </section>

          <section className="section-categoria">
            <li onClick={() => handleSide("color")} style={{ cursor: "pointer" }}>
              Color
              {mostrar.color && (
                <ul>
                  <li onClick={() => handleFiltrar('color', 'Verde')}>Verde</li>
                  <li onClick={() => handleFiltrar('color', 'Rojo')}>Rojo</li>
                  <li onClick={() => handleFiltrar('color', 'Azul')}>Azul</li>
                  <li onClick={() => handleFiltrar('color', 'Amarillo')}>Amarillo</li>
                </ul>
              )}
            </li>
          </section>

          <section className="section-categoria">
            <li onClick={() => handleSide("talle")} style={{ cursor: "pointer" }}>
              Talle
              {mostrar.talle && (
                <ul>
                  <li onClick={() => handleFiltrar('talle', 'S')}>S</li>
                  <li onClick={() => handleFiltrar('talle', 'M')}>M</li>
                  <li onClick={() => handleFiltrar('talle', 'L')}>L</li>
                  <li onClick={() => handleFiltrar('talle', 'X')}>X</li>
                </ul>
              )}
            </li>
          </section>

          <section className="section-categoria">
            <li onClick={() => handleSide("grupo")} style={{ cursor: "pointer" }}>
              Grupo
              {mostrar.grupo && (
                <ul>
                  <li onClick={() => handleFiltrar('grupo', 'Infantil')}>Infantil</li>
                  <li onClick={() => handleFiltrar('grupo', 'Juvenil')}>Juvenil</li>
                  <li onClick={() => handleFiltrar('grupo', 'A')}>A</li>
                  <li onClick={() => handleFiltrar('grupo', 'B')}>B</li>
                </ul>
              )}
            </li>
          </section>

        </ul>
        <button onClick={limpiarFiltros}>Limpiar filtros</button>
      </aside>

      <div className="contenido">
       
        
        <form onSubmit={handleEnviar} className="formulario-vestido">
          <input type="text" name="nombre" placeholder="Nombre del Baile" value={vestido.nombre} onChange={handleInputChange} required />
          <input type="text" name="temporada" placeholder="Temporada" value={vestido.temporada} onChange={handleInputChange} required />
          <input type="text" name="color" placeholder="Color" value={vestido.color} onChange={handleInputChange} required />
          <input type="text" name="grupo" placeholder="Grupo" value={vestido.grupo} onChange={handleInputChange} required />
          <input type="text" name="talle" placeholder="Talle" value={vestido.talle} onChange={handleInputChange} required />
          <input type="text" name="estilo" placeholder="Estilo" value={vestido.estilo} onChange={handleInputChange} />
          <input type="text" name="imagen" placeholder="URL de imagen" value={vestido.imagen} onChange={handleInputChange} />
          <input type="text" name="año" placeholder="Año" value={vestido.año} onChange={handleInputChange} />
          <button type="submit">Agregar vestido</button>
        </form>

        {filtro().map(vestido => (
          <div key={vestido.id} className="principal">
            <section className="section-principal">
              <img src={vestido.imagen} alt={vestido.nombre} />
              <h3>{vestido.nombre}</h3>
            </section>
            <section className="section-descripcion">
              <h2>{vestido.nombre}</h2>
              <p>Temporada: {vestido.temporada}</p>
              <p>Grupo: {vestido.grupo}</p>
              <p>Talle: {vestido.talle}</p>
              <p>Año: {vestido.año}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventario;




//cargar datos a db 
//cambiar filtro para se filtran aunque el campo este ingresado en minusculas
//manejar de mejor manera el tema de espacios