import React from 'react'

const MoviesList = (props) => {
    console.log(props);
  return (
    <div className='flex gap-1 overflow-y-auto'>
        {props.movies.map((movie,index)=>(
            <div> 
                <img src={movie.Poster} alt="" />
            </div>
        ))}
    </div>
  )
}

export default MoviesList