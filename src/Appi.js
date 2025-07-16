import { useState , useEffect } from "react"



// esta mal la ruta de vestidos , y url esta mal 
const URL = 'http://localhost:4000'

//metodo GET
export const apiGet =  async (endpoint)=>{
    const response = await fetch(`${URL}${endpoint}`)
    if (!response.ok){
        throw new Error("error")
        
    }
    return await response.json()

}


//metodo POST 
export const apiPost = async (endpoint , data)=>{

    const response = await fetch(`${URL}${endpoint}`,
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
    )
    if (!response.ok){
        throw new Error(`Error no se creo `)
    }
    return await response.json();


}

//metodo DELETE
export const apiDelete = async (endpoint )=>{
    const response = await fetch(`${URL}${endpoint}`,
        {
            method:'DELETE'
        }
    )
    if(response.ok){
        throw new Error(`Error al borrar ${endpoint} `)

    }
    return await response.json()
}


//metodo UPDATE











