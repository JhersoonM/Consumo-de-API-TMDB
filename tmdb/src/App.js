import logo from './logo.svg';
import './App.css';

function App() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTAwNTU1ODUzOGM2ODgwMTQ5NDZkMDJmZmZmODEyMiIsIm5iZiI6MTc0ODYzNDczMS4yNTksInN1YiI6IjY4M2EwYzZiZTVlNzFhZjc2ZTA4MGJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqeXPEedKLylB1u_J-ZinWfyMso_oTe_HA056EQOeD0'
    }
  };

fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=TU_API_KEY&language=es-ES&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res.results))
  .catch(err => console.error(err));
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
