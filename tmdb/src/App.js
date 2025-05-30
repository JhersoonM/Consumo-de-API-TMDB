import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [peliculas,setPeliculas] = useState([]);
  const [buscarpe,setBuscarpe] = useState('');
  const [filtrarpeli,setFiltrarpeli] = useState([]);


//---------------------------------------------------------------------Consumiendo API--------------------------------------------------------------
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTAwNTU1ODUzOGM2ODgwMTQ5NDZkMDJmZmZmODEyMiIsIm5iZiI6MTc0ODYzNDczMS4yNTksInN1YiI6IjY4M2EwYzZiZTVlNzFhZjc2ZTA4MGJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqeXPEedKLylB1u_J-ZinWfyMso_oTe_HA056EQOeD0'
    }
  };

  useEffect(() =>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=TU_API_KEY&language=es-ES&page=1', options)
    .then(res => res.json())
    .then(res => {
      setPeliculas(res.results);
      setFiltrarpeli(res.results);
    })
    .catch(err => console.error(err));
  },[]);  
//---------------------------------------------------------------------------------------------------------------------------------------------------

return (
    <div className="App">
{/*----------------------Header-----------------------*/}
      <div className='header'>
        <h1 className='tituloheader'>Peliculas</h1>
        <input 
          className='busc'
          type='text'
          placeholder='Buscar pelicula...'
        />
      </div>
{/*-----------------------Body-----------------------*/}
      <div className='body'>
        
      </div>
    </div>
  );
}

export default App;
