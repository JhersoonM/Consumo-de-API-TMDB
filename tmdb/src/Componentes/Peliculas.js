import { useState } from 'react';
import './Peliculas.css'

function Peliculas({pelicul}){
//----------------------------------funcion para cambiar el estado de la clase, para mostrar u ocultar-------------------------------------
    const [visible,setvisible] = useState(false);
    function clase() {
        setvisible(!visible);
    }
//-----------------------------------------------------------------------------------------------------------------------------------------
    return(
        <div className='card' onClick={clase}>
            
            <img className='cardImg' src={`https://image.tmdb.org/t/p/w500${pelicul.poster_path}`} alt={pelicul.title}/>
            <h1 className='cardtitu'>{pelicul.title}</h1>
            <p className='cardfecha'>Lanzamiento: {pelicul.release_date}</p>
            <div className={`carddesc ${visible ? 'visible' : ''}`}>
                <h3>Resumen</h3>
                <p>{pelicul.overview}</p>
            </div>
            
        </div>
    )
}
export default Peliculas;