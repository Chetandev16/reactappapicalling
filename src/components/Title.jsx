import React from 'react'

const Title = (props) => {
  console.log(props);
  return (
    <div className='flex flex-col gap-2 items-center'>
      <img src={props.TitleObj.Poster} alt="" />
      <h1 className='text-xl font-normal underline'>{props.TitleObj.Title}</h1>
      <button onClick={()=>{
        props.setShow(false);
      }} className='bg-blue-600 w-1/2 p-4 shadow-lg text-white hover:bg-blue-800 rounded-lg'>Back</button>
    </div>
  )
}

export default Title