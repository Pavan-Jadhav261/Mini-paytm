import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import Navbar from '../../components/Navbar'
import axios from 'axios'

interface detailInterface{
  firstName? : string;
  lastName ?: string;
  id ?: string;
  username? : string;
  _id?:string;
}


const Transiction = () => {
  const [allusers , setAllUsers] = useState<detailInterface[]>([])
  const [load ,setLoad] = useState(false)
  const token = localStorage.getItem("token")
  const [balance , setBalance] = useState<number>()
  const [details,setDetails]  = useState<detailInterface>({})


  useEffect(()=>{
      async function getDetails(){ 
        try{
    const response = await axios.get("http://localhost:3000/api/v1/user/getDetails",{
      headers:{
        token : token
      }
    })
    console.log(response)
    setDetails(prev => ({
      ...prev , 
      firstName : response.data.firstName,
      lastName : response.data.lastName,
      username : response.data.username,
      id : response.data.id
    }))

  }catch(e){
    alert("something went wrong")
    console.log("cannot get details")
  }
}
  getDetails()
  },[])




useEffect(()=>{
  async function getBalance(){
try {
    const response = await axios.get("http://localhost:3000/api/v1/trasciton/balance",{
      headers:{
        token : token
      }
    })
setBalance(prev => response.data.msg)
  } catch(e){
    alert("cannot get your balance")
  }
  }
  getBalance()
},[])

useEffect(()=>{
  async function getAllusers(){
    try{
      const response = await axios.get("http://localhost:3000/api/v1/user/getAllusers",{
        headers :{
          token : token
        }
      })
      console.log(response);
      
      setAllUsers(prev =>([...prev , ...response.data.users]))
    }
    catch(e){
      alert("something went wrong")
    }
  }
  getAllusers()
},[])

  return (
    <div className=' mt-2 mx-5 '>
      <Navbar name={details.firstName}/>
        <div className='mb-6'>
            <h1 className='text-xl font-bold'>Your balance ${balance?.toFixed(2)}</h1>
        </div>
        <div className='mb-5'>
            <h1 className='text-xl font-bold mb-5'>{details.firstName}</h1>
            <input placeholder='Search users...' className='w-full h-7 p-4 border border-slate-500 rounded-sm focus:border-slate-500 '/>
        </div>
        <div className='flex flex-col'>
                {
                  allusers.map((users,idx)=>{
                    console.log(users.firstName);
                    
                    return <Card firstName={users.firstName} lastName={users.lastName} key={idx} userid={users._id??""}/>
                  })
                }
            </div>
    </div>
  )
}

export default Transiction