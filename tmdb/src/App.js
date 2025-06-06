import { useEffect, useState } from 'react';
import Peliculas from './Componentes/Peliculas';
import './App.css';

function App() {
  const [peliculas,setPeliculas] = useState([]); //variable donde obtengo las peliculas de la API
  const [buscarpe,setBuscarpe] = useState(''); //variable donde guardo la informacion del buscador
  const [filtrarpeli,setFiltrarpeli] = useState([]); //variable donde filtro el JSON con la variable para buscar

  //Variables para poder filtrar el numero de elementos mostrados
  const [pgactual,setpgactual] = useState(1); 
  const contador = 5;//indicador de cuantos elementos quieres mostrar por pantalla

  //Manejo de errores
  const [error, setError] = useState(null);
//---------------------------------------------------------------------Consumiendo API--------------------------------------------------------------
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTAwNTU1ODUzOGM2ODgwMTQ5NDZkMDJmZmZmODEyMiIsIm5iZiI6MTc0ODYzNDczMS4yNTksInN1YiI6IjY4M2EwYzZiZTVlNzFhZjc2ZTA4MGJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqeXPEedKLylB1u_J-ZinWfyMso_oTe_HA056EQOeD0'
    }
  };
  useEffect(() => {
  const fetchPeliculas = async () => {
    try {

      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setPeliculas(data.results);
      setFiltrarpeli(data.results);
      setError(null);

    } catch (err) {
        console.error('Error al cargar películas:', err);
        setError('No se pudieron cargar las películas. Intenta más tarde.');
    }
  };
  fetchPeliculas();
}, []);
//-------------------------------------------------------------useEffect para buscar peliculas-------------------------------------------------------
useEffect(()=>{
  const resultado = peliculas.filter( p =>
    p.title.toLowerCase().includes(buscarpe.toLowerCase())
  );
  setFiltrarpeli(resultado);
},[buscarpe,peliculas]);
//---------------------------------------------------------------Ennumerar paginas de 5 en 5---------------------------------------------------------
//Calcular las peliculas por pagina
const indult = pgactual * contador;
const indini = indult - contador;
const indactu = filtrarpeli.slice(indini,indult)
//Calcular el total de paginas
const totalpag = Math.ceil(filtrarpeli.length / contador);
const irant = () =>{
  if(pgactual > 1){setpgactual(pgactual - 1)}
}
const irsig = () =>{
  if(pgactual < totalpag){setpgactual(pgactual + 1)}
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
return (
    <div className="App">
{/*----------------------Header-----------------------*/}
      <div className='header'>
        <h1 
          className='tituloheader'
          onClick={()=>window.location.reload()}
          >Peliculas TMDB</h1>
        <input 
          className='busc'
          type='text'
          placeholder='    Buscar pelicula...'
          value={buscarpe}
          onChange={e => setBuscarpe(e.target.value)}
        />
      </div>
{/*-----------------------Body-----------------------*/}
      <div className='body'>
        <div className='bodycard'>
          {error && <div className="error">{error}</div>}
          {indactu.map( peli =>( //hace un recorrido del array y las muestra de 5 en 5
            <Peliculas key={peli.id} pelicul={peli}></Peliculas>
          ))}
        </div>
{/*-------------------Botones para avanzar------------------------*/}        
        <div className='btnpag'>
          <button className='btnbtn' onClick={irant} disabled={pgactual === 1}>&lt;</button>
          <span>{pgactual} de {totalpag}</span>
          <button className='btnbtn' onClick={irsig} disabled={pgactual === totalpag}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
