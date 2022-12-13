import MoviesList from "./MoviesList";
import { useState, useEffect } from "react";
function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [search,setSearch] = useState('');

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=5821cd85`

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
    <div className="flex gap-8 bg-gray-300 min-h-screen flex-col  items-center">
      <div className="mt-10 flex gap-4 ">
        <input value={searchTerm} onChange={(e)=>{
          setSearchTerm(e.target.value)
        }} className="p-2 shadow-md" type="text" placeholder="Enter Movie To Search!" />
        <button onClick={() => {
          setSearch(searchTerm)
        }} className="p-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg shadow-md">Search</button>
      </div>
      <div className="mt-28">
        <MoviesList movies={movies} />
      </div>
    </div>
  );
}

export default App;
