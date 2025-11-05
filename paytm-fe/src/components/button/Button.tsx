import React from 'react'
interface buttonProps{
    text : string;
    loading? : boolean;
    onClick?: ()=> void;
}

const Button = (props:buttonProps) => {
  return (
    <div>
        <button className='bg-green-400 text-white rounded-sm p-1.5 flex justify-center items-center text-sm px-4' onClick={props.onClick}>
            <h1>{props.loading ? <div id="loader"></div> : props.text}</h1>
       </button>
    </div>
  )
}

 
export default Button


