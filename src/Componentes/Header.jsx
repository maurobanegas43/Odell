import './Header.css'
import { useNavigate } from "react-router-dom";


const Header= ({setProtegida})=>{
        const navigate = useNavigate();


    // el componente que mas trabajo le falta
 
return(

    <div className="header-principal">
        <img src='/public/imagenes_vestidos/logo de una bailarina clasica con colores rosa y blanco y un fondo negro.png'></img>
        <h1>Odell</h1>
        <button onClick={()=> {navigate('/home')}}>Home</button>
        <button onClick={()=> {navigate('/inscribirAlumnas')}}>Nueva Alumna</button>
        <button onClick={()=> {navigate('/situacionArancelaria')}}>Situacion Alumna</button>
        <button onClick={()=> {navigate('/inventario')}}>Inventario</button>
        <button onClick={()=> {navigate('/alumnas')}}>Alumnas</button>
        
        <button onClick={()=> {
         setProtegida(false)
         navigate('/')

        }}>Cerrar Sesion</button>


        
    </div>
)










}
export default Header;