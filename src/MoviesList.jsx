import React from 'react'

const MoviesList = (props) => {
    console.log(props);
  return (
    <div className='sm:flex lg:flex-row lg:gap-2'>
        {props.movies.map((movie,index)=>(
            <div className=''> 
                <img className='shadow-lg mt-2' src={movie.Poster} alt="" />
            </div>
        ))}
    </div>
  )
}

export default MoviesList