import dayjs from 'dayjs'
//No voy a usar esta libreria pocas funciones y versatilidad


// Aqui en el body tiene  que estar el cronograma para agregar notas y fechas importantes



const Body=()=>{
    const date= dayjs()

    

return (

<div className="body-principal">
    <section className="body-home">
        <h2>Cronograma</h2>
        <div className="calendario">
            <p>{date.day()}</p>
    
            



        </div>







        
    </section>

    <section className="body-section-secondaria">
        <img></img>
    </section>
    


</div>



)



}
export default Body;