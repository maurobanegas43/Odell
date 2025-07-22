import { useState, useEffect } from "react"
import { apiGet } from "../Appi"
import './Aranceles.css'



const Aranceles =()=>{

const [comprobantes, setComprobante]=useState([])
const [ agregar, setAgregar] = useState(false)

const [newComprobante , setNewComprobante]=useState({
    nombre : '',
    apellido : '',
    fecha : '',
    metodo_de_pago : '',
    importe : ''
}
    

)

 useEffect(() => {
    const fetchComprobante= async () => {
      const data = await apiGet('/comprobantes');
      setComprobante(data);
      console.log(data)
    };

    fetchComprobante();
    console.log(fetchComprobante)
  }, []);



const handleEnvio = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/newComprobante', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComprobante)
      });

      const convertir = await response.json();
      console.log("Funciona", convertir);
      setAgregar(false)

     setNewComprobante({
         nombre : '',
         apellido : '',
         fecha : '',
         medio : '',
         importe : ''


     })} catch (error) {
      console.log("Error al enviar datos ", error);
    }
  };


const recibirInput=(e)=>{
    setNewComprobante({
        ...newComprobante,
[e.target.name ]: e.target.value

})

    }


return(

    <div className="principal-excel">
        <button onClick={()=>{
            setAgregar(true)
        }} >Agregar comprobante</button>
        {agregar && (
        
        
        <form onSubmit={handleEnvio}>
        <section className="tabla">
            <div className="fila-header">
            <div className="box-columna"><h2>Nombre</h2> </div>
            <div className="box-columna"><h2>Apellido</h2> </div>
            <div className="box-columna"><h2>Fecha</h2> </div>
            <div className="box-columna"><h2>Importe</h2> </div>
            <div className="box-columna"><h2>Medio de pago</h2> </div>
            </div>
        </section>

        <section className="box-fila">
            <div className="fila">
            <input
            name="nombre"
            value={newComprobante.nombre}

            onChange={recibirInput}
            placeholder="Nombre"

            
            ></input>
            <input
            name="apellido"
            value={newComprobante.apellido}
            onChange={recibirInput}
            placeholder="Apellido"
            
            ></input>
            <input
            name="fecha"
            type="date"
            value={newComprobante.fecha}
            onChange={recibirInput}
            placeholder="Fecha"
            ></input>
            <input
            name="importe"
            value={newComprobante.importe}
            onChange={recibirInput}
            placeholder="Importe"
            ></input>
            <input
            name="medio" 
            value={newComprobante.metodo_de_pago}
            onChange={recibirInput} 
            placeholder="Medio de Pago"
            ></input>

            <button type="submit">Cargar</button>
      


        </div>
        </section>

        
        
    
        </form>
        
        )}
        <section className="tabla">
            <div className="fila-header">
            <div className="box-columna"><h2>ID</h2> </div>
            <div className="box-columna"><h2>Nombre</h2> </div>
            <div className="box-columna"><h2>Apellido</h2> </div>
            <div className="box-columna"><h2>Fecha</h2> </div>
            <div className="box-columna"><h2>Importe</h2> </div>
            <div className="box-columna"><h2>Medio de pago</h2> </div>
            </div>
        
        </section>
        <section>            
            <div className="box-fila">
                {comprobantes.map((comprobante)=>(
                    <div className="fila" key={comprobante.id}>
                    <div>{comprobante.id}</div>
                    <div>{comprobante.nombre}</div>
                    <div>{comprobante.apellido}</div>
                    <div>{comprobante.fecha}</div>
                    <div>{comprobante.importe}</div>
                    <div>{comprobante.medio}</div>
                   </div>
                    
            ))}
            </div>
        </section>






    </div>





)



}
export default Aranceles;