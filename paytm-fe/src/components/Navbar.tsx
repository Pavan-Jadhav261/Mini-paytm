import React from 'react'
import Circle from './Circle/Circle'

interface Navbarprops{
  name?: string;
}

const Navbar = (props : Navbarprops) => {
  return (
    <div className=' w-full'>
        <div className='flex py-3 justify-between items-center border-b border-slate-400'>
            <h1 className='text-2xl font-bold'>Payments App</h1>
            <div className='flex justify-center items-center gap-3'>
            <p className='text-xl'>Hello ,{props.name}</p>
           <Circle text="U"/>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar