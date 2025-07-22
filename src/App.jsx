import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Login from './Componentes/Login'
import Inventario from './Componentes/Inventario'
import Header from './Componentes/Header'
import Body from './Componentes/Body'
import DataGridDemo from './Componentes/DataGridDemo'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componentes/Home'
import Proteger from './Componentes/Proteger'
import Sesion from './Componentes/Sesion'
import Alumna from './Componentes/Alumna'
import Aranceles from './Componentes/Aranceles'



function App() {


  const [rutaProtegida, setProtegida] = useState(() => {
    const saved = localStorage.getItem('rutaProtegida')
    return saved === 'true'
  })


  useEffect(() => {
    localStorage.setItem('rutaProtegida', rutaProtegida.toString());
  }, [rutaProtegida]);




  return (

    
    <BrowserRouter>
          <Header setProtegida={setProtegida}></Header>
          <Routes>
                <Route path='/' element={<Sesion setProtegida={setProtegida} ></Sesion>}> </Route>
                
                <Route path='/home' element={<Proteger rutaProtegida={rutaProtegida}>
                  <Home setProtegida={setProtegida}></Home>
                   </Proteger> }></Route>
                <Route path='/inscribirAlumnas' 
                element={
                <Proteger rutaProtegida={rutaProtegida}>
                <Login setProtegida={setProtegida}></Login>
                </Proteger>
                
                }></Route>
                <Route path='/inventario' 
                element={
                <Proteger rutaProtegida={rutaProtegida}>
                <Inventario setProtegida={setProtegida}></Inventario>
                </Proteger>
                
                }> </Route>
                <Route path='/situacionArancelaria' 
                element={
                <Proteger rutaProtegida={rutaProtegida}>
                <Aranceles  setProtegida={setProtegida}></Aranceles>
                </Proteger>
                }></Route>


                <Route path='/alumnas' 
                element={
                <Proteger rutaProtegida={rutaProtegida}>
                <Alumna setProtegida={setProtegida}></Alumna>
                </Proteger>
                }>

                </Route>


          </Routes>
    
    
    
    </BrowserRouter>

    
  
    

  
  )
}

export default App
