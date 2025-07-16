import { useEffect, useState } from "react";
import { apiGet } from "../Appi";
import { useNavigate } from "react-router-dom";
import './Sesion.css';






const Sesion = ({setProtegida}) =>{


    const navigate = useNavigate();

    const [admin ,setAdmin]= useState([])

    const [user , setUser] = useState({
        userName :'',
        userPassword:''

    })
//Mejoras a futuro encriptacion de db 
// Agregar jwt para cookie de usuario valido en durante sesion





    useEffect(()=>{
        handleRecibir()
    },[])

      const handleRecibir = async()=>{
          const data = await apiGet("/admins")
          console.log("data de /admins:", data) // 👈 agrega esto

          setAdmin(data)
          if (!data){
            return console.log("error al traer datos")
          }
          
        }


    const handleInputChange=(e)=>{
        const {name , value}= e.target
        setUser((prev)=>({
            ...prev,
            [name]:value

        }))

    }




    const validacion=()=>{
        const userValidacion= admin.find(
            (usuario)=>
                usuario.nombre === user.userName &&
                usuario.contraseña === user.userPassword
        )
        if(userValidacion){
            setProtegida(true)
            console.log("usuario valido")
            navigate("/home");
        }else{
            console.log("error en el ingreso de datos")
        }


    }



return (
        <div className='principal-login'>
   <div className='login-sesion'>
        <section className='login-sesion-section'>
            <h2>Iniciar Sesion</h2>
            <label>Usuario</label><input
            name='userName'
            value={user.userName}
            onChange={handleInputChange}>

            </input>
            <label>Contraseña</label><input
            name='userPassword'
            value={user.userPassword}
            onChange={handleInputChange}
            >

            </input>
            <button onClick={validacion}></button>

            </section>
            </div>
            </div>

)
    







}

export default Sesion;