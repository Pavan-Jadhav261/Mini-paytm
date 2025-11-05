import React, { useRef, useState } from "react";
import Button from "../../components/button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signin = () => {
  const navigate = useNavigate()
    const [load , setLoad] = useState(false)
  const userRef = useRef<HTMLInputElement>(null)
  const pwdRef = useRef<HTMLInputElement>(null)


  async function getToken(){
    try{
      setLoad(prev => !prev)
      const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
        username : userRef.current?.value,
        password : pwdRef.current?.value
      })
      console.log(response.data.msg)
      localStorage.setItem("token" , response.data.msg)
      navigate("/Transiction")
      setLoad(prev => !prev)
    }
    catch(e){
      alert("invalid credentials ,try again")
    }
  }
  
  return (
    <div className=" h-screen w-full flex justify-center items-center ">
      <div className="h-100 w-md p-4 border border-slate-50 shadow-2xl bg-white rounded-3xl">
        <div className="flex justify-center items-center font-bold text-2xl">
          <h1>Signin</h1>
        </div>
        <div className="p-7 flex justify-center items-center flex-col w-full gap-3 ">
          <div className="p-2 w-full">
       <input type="text " ref={userRef} placeholder="Username" className="border-b border-slate-500  h-7 focus:outline-0 focus:border-b-2 w-full " />
          </div>
          <div className="p-2 w-full">
            <input type="text " ref={pwdRef} placeholder="Password" className="border-b border-slate-500 h-7 focus:outline-0 focus:border-b-2 w-full " />
          </div>
        </div>
        <div className="flex justify-center items-center">
         <Button text="Submit" loading = {load} onClick={()=>{
                  getToken();
         }}/>
        </div>
      </div>
    </div>
  );
};

export default Signin;