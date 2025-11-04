import React from 'react'

interface buttonProps{
    text : string;
    onClick?: ()=> void;
}

const Button = (props:buttonProps) => {
  return (
    <div>
        <button className='bg-black text-white rounded-sm p-1.5 flex justify-center items-center text-sm px-4' onClick={props.onClick}>
            <h1>{props.text}</h1>
            </button>
    </div>
  )
}

export default Button