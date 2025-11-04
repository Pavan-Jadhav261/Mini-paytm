import React from 'react'
import Circle from './Circle/Circle'

const Navbar = () => {
  return (
    <div className='mx-5'>
        <div className='flex py-3 justify-between items-center border-b border-slate-400'>
            <h1 className='text-2xl font-bold'>Payments App</h1>
            <div className='flex justify-center items-center gap-3'>
            <p className='text-xl'>Hello , User</p>
           <Circle text="U"/>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar