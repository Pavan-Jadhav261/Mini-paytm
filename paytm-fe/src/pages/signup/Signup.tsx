import React, { useRef, useState } from "react";
import Button from "../../components/button/Button";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate()
  const [load , setLoad] = useState(false)
  const userRef = useRef<HTMLInputElement>(null)
  const pwdRef = useRef<HTMLInputElement>(null)
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)

 async function addUser(){
  try{
    setLoad(prev => !prev)
    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
      
        username : userRef.current?.value,
        password : pwdRef.current?.value,
        firstName : firstNameRef.current?.value,
        lastName : lastNameRef.current?.value
      
    })
    
     setLoad(prev => !prev)
      navigate("/signin")
  }catch(e){
    alert("something went wrong try again")
    }
  }

  return (
    <div className=" h-screen w-full flex justify-center items-center ">
      <div className="h-100 w-md p-4 border border-slate-50 shadow-2xl bg-white rounded-3xl">
        <div className="flex justify-center items-center font-bold text-2xl">
          <h1>Signup</h1>
        </div>
        <div className="p-7 flex justify-center items-center flex-col w-full gap-3 ">
          <div className="p-2 w-full">
       <input type="text " placeholder="Username" ref={userRef} className="border-b border-slate-500 w-full h-7 focus:outline-0 focus:border-b-2 w-full " />
          </div>
          <div className="p-2 w-full">
            <input type="text " placeholder="Password" ref={pwdRef} className="border-b border-slate-500 w-full h-7 focus:outline-0 focus:border-b-2 w-full " />
          </div>
           <div className="p-2 w-full">
      <input type="text " placeholder="First name" ref={firstNameRef} className="border-b border-slate-500 w-full h-7 focus:outline-0 focus:border-b-2 w-full " />
          </div>
           <div className="p-2 w-full">
       <input type="text " placeholder="Last Name" ref={lastNameRef} className="border-b border-slate-500 w-full h-7 focus:outline-0 focus:border-b-2 " />
          </div>
          
        </div>
        <div className="flex justify-center items-center">
         <Button text="Submit" loading = {load} onClick={()=>{
          addUser()
         }}/>
        </div>
      </div>
    </div>
  );
};

export default Signup;