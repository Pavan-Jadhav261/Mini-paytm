import React from 'react'

interface CircleProps
{
    text : string
}
const Circle = (props:CircleProps) => {
  return (
     <div className='text-xl text-center h-4 w-4 flex justify-center items-center p-6 rounded-full bg-slate-200'>{props.text}</div>
  )
}

export default Circle