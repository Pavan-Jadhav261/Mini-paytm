import React, { useEffect, useRef } from 'react'
import Circle from '../Circle/Circle'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom';

interface cardProps{
  firstName?:string;
  lastName?:string;
  userid:string;
  key:number;
}

const Card = (props:cardProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  function SendMoney(){
    navigate("/send-money",{state:{userId :props.userid,firstName :props.firstName}})
  }
  
  return (
    <div className='my-2 flex justify-between items-center '>
        <div className='flex gap-3 items-center'>
             <div>
            <Circle/>
            </div>
            <div>
                <h1 data-userid={props.userid} className='text-lg font-semibold'>{props.firstName}</h1>
            </div>
        </div>
        <div data-userid = {props.userid}  data-firstName = {props.firstName} ref={divRef}>
            <Button  text='Send Money'onClick={()=>{
              SendMoney()
            }}/>
        </div>
    </div>
  )
}

export default Card