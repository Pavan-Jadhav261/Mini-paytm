import React from 'react'
import Card from '../card/Card'

const Transiction = () => {
  return (
    <div className=' mt-2 mx-5 py-3'>
        <div className='mb-6'>
            <h1 className='text-xl font-bold'>Your balance $5000</h1>
        </div>
        <div className='mb-5'>
            <h1 className='text-xl font-bold mb-5'>Users</h1>
            <input placeholder='Search users...' className='w-full h-7 p-4 border border-slate-500 rounded-sm focus:border-slate-500 '/>
        </div>
        <div className='flex flex-col'>
                <Card/>  <Card/>  <Card/>  <Card/>  <Card/>
            </div>
    </div>
  )
}

export default Transiction