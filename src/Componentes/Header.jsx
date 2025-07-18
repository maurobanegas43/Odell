import './Header.css'
import { useNavigate } from "react-router-dom";


const Header= ({setProtegida})=>{
        const navigate = useNavigate();


    // el componente que mas trabajo le falta
 
return(

    <div className="header-principal">
        <h1>Odell</h1>
        <button onClick={()=> {navigate('/home')}}>Home</button>
        <button onClick={()=> {navigate('/inscribirAlumnas')}}>Nueva Alumna</button>
        <button onClick={()=> {navigate('/situacionArancelaria')}}>Situacion Alumna</button>
        <button onClick={()=> {navigate('/inventario')}}>Inventario</button>
        <button onClick={()=> {navigate('/alumna')}}>Alumnas</button>
        
        <button onClick={()=> {
         setProtegida(false)
         navigate('/')

        }}>Cerrar Sesion</button>


        
    </div>
)










}
export default Header;