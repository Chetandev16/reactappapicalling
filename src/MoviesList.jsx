import React from 'react'

const MoviesList = (props) => {
    console.log(props);
  return (
    <div className='grid mr-5 grid-cols-1 lg:grid-cols-4  lg:gap-6 lg:mr-0'>
        {props.movies.map((movie,index)=>(
            <div className=''> 
                <img className='shadow-lg mt-2' src={movie.Poster} alt="" />
            </div>
        ))}
    </div>
  )
}

export default MoviesList