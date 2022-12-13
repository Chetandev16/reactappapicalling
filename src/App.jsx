import MoviesList from "./MoviesList";
import { useState, useEffect } from "react";
function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_ID}`

    const res = await fetch(url);
    const resJson = await res.json();

    if (resJson.Search) {
      setMovies(resJson.Search);
    }
  }

  useEffect(() => {
    getMovies();
  }, [search])


  return (
    <div className="min-h-screen bg-gray-300">
      {/* {process.env.REACT_APP_API_ID} */}
      <div className="bg-blue-400 flex flex-col p-3 gap-3 lg:flex-row lg:justify-between lg:items-center lg:px-52 lg:py-3">
        <h1 className="text-xl lg:text-2xl font-medium ">Movie Search App</h1>
        <div className="flex gap-3">
          
          <input value={searchTerm} onChange={(e) => {
            setSearchTerm(e.target.value)
          }} className="p-1 rounded-md shadow-md w-auto" type="text" placeholder="Enter Movie To Search!" />

          <button onClick={() => {
            setSearch(searchTerm)
          }} className="p-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg shadow-md">Search</button>
        
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-28">
        <MoviesList movies={movies} />
      </div>
    </div>
  );
}

export default App;
