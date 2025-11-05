import React from 'react'
import Profile from '../../icons/Profile'

interface CircleProps
{
    text? : string
}
const Circle = (props:CircleProps) => {
  return (
     <div className='text-xl text-center h-4 w-4 flex justify-center items-center p-6 rounded-full bg-slate-200'><Profile/></div>
  )
}

export default Circle