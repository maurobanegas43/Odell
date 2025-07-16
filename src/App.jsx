import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Login from './Componentes/Login'
import Inventario from './Componentes/Inventario'
import Header from './Componentes/Header'
import Body from './Componentes/Body'
import DataGridDemo from './Componentes/DataGridDemo'
import Alumna from './Componentes/Alumna'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componentes/Home'
import Proteger from './Componentes/Proteger'
import Sesion from './Componentes/Sesion'



function App() {


  const [rutaProtegida, setProtegida] = useState(() => {
    const saved = localStorage.getItem('rutaProtegida')
    return saved === 'true'
  })


  useEffect(() => {
    localStorage.setItem('rutaProtegida', rutaProtegida.toString());
  }, [rutaProtegida]);

const reset =()=>{

}


  return (

    
    <BrowserRouter>
          <Header></Header>
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
                <DataGridDemo setProtegida={setProtegida}></DataGridDemo>
                </Proteger>
                }></Route>

          </Routes>
    
    
    
    </BrowserRouter>

    
  
    

  
  )
}

export default App
