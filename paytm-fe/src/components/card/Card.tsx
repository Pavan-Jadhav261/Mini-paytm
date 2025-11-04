import React from 'react'
import Circle from '../Circle/Circle'
import Button from '../button/Button'

const Card = () => {
  return (
    <div className='my-2 flex justify-between items-center '>
        <div className='flex gap-3 items-center'>
             <div>
            <Circle text = "U"/>
            </div>
            <div>
                <h1 className='text-lg font-semibold'>User1</h1>
            </div>
        </div>
        <div>
            <Button text='Send Money'/>
        </div>
    </div>
  )
}

export default Card