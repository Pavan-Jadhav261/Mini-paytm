import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Circle from '../../components/Circle/Circle'
import Button from '../../components/button/Button'
import axios from 'axios'


const SendMoney = () => {
    const[loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const [details,setDetails] = useState(location.state)
    const token = localStorage.getItem("token") 
    if(!token) return
    const inputRef = useRef<HTMLInputElement>(null)
    async function sendMoney(){
        const inputValue = inputRef.current?.value
          try{
            setLoading(prev => !prev)
            const response  = await axios.post("http://localhost:3000/api/v1/trasciton/transaction",{
                amount : inputValue,
                to:details.userId,
            },{
                headers:{
                    token : token
                }
            })
            setLoading(prev => !prev)
            alert("Transfer sucessfull")
            navigate("/transiction")
          }  
          catch(e){
            setLoading(prev => !prev)
            alert("Transication unsuccessfull")
          }
    }
    
  return (
    <div className='flex justify-center items-center w-full h-screen'>
            <div className='h-90 w-140 shadow-2xl px-10'>
                <div className='flex justify-center p-10'>
                    <h1 className='text-3xl font-bold'>Send Money To</h1>
                    </div>
                    <div className='flex items-center gap-3' >
                        <Circle/>
                        <h1 className='text-2xl font-bold'>
                            {details.firstName}
                        </h1>
                       
                    </div>
                    <div className='py-2'>
                         <p>Amount in dollars($)</p>
                         <input ref={inputRef} type='number' placeholder='Enter amount...' className="border border-slate-300 p-1 w-full rounded-lg pl-2"/>
                    </div>
                  <div>
                   <button onClick={sendMoney} className='bg-green-400 mt-4 text-white rounded-lg p-1.5 flex justify-center items-center text-sm px-4 w-full'>
             <h1>{loading ? <div id="loader"></div> : "Initiate Transfer"}</h1>
              </button>
    </div>
            </div>
    </div>
  )
}

export default SendMoney