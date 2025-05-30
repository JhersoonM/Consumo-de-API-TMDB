import './Peliculas.css'

function Peliculas({pelicul}){

    return(
        <div className='card'>
            <img className='cardImg' src={`https://image.tmdb.org/t/p/w500${pelicul.poster_path}`} alt={pelicul.title}/>
            <h1 className='cardtitu'>{pelicul.title}</h1>
            <h3 className='cardfecha'>{pelicul.release_date}</h3>
            <p className='carddesc'>{pelicul.overview}</p>
        </div>
    )
}
export default Peliculas;