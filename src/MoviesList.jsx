import React, { useState } from 'react'
import Title from "./components/Title"

const MoviesList = (props) => {
  const [show, setShow] = useState(false);
  const [TitleObj, setTitleObj] = useState({});
  console.log(props);
  if (show) {
    return (
      <Title TitleObj={TitleObj} setShow = {setShow} />
    )
  } else {
    return (
      <div className='grid mr-5 grid-cols-1 lg:grid-cols-4  lg:gap-6 lg:mr-0'>
        {props.movies.map((movie, index) => (
          <div className='hover:scale-110 transition ease-in-out' onClick={() => {
            setTitleObj({
              Poster: movie.Poster,
              Title: movie.Title,
            })
            setShow(true);
          }}>
            <img className='shadow-lg mt-2' src={movie.Poster} alt="" />
          </div>
        ))}
      </div>
    )
  }
}

export default MoviesList