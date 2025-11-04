import React, { useRef } from "react";
import Button from "../components/button/Button";


const Signin = () => {
  
  return (
    <div className=" h-screen w-full flex justify-center items-center ">
      <div className="h-100 w-md p-4 border border-slate-50 shadow-2xl bg-white rounded-3xl">
        <div className="flex justify-center items-center font-bold text-2xl">
          <h1>Signin</h1>
        </div>
        <div className="p-7 flex justify-center items-center flex-col w-full gap-3 ">
          <div className="p-2 w-full">
       <input type="text " placeholder="Username" className="border-b border-slate-500 w-full h-7 focus:outline-0 focus:border-b-2 w-full " />
          </div>
          <div className="p-2 w-full">
            <input type="text " placeholder="Password" className="border-b border-slate-500 w-full h-7 focus:outline-0 focus:border-b-2 w-full " />
          </div>
           <div className="p-2 w-full">
      <input type="text " placeholder="First name" className="border-b border-slate-500 w-full h-7 focus:outline-0 focus:border-b-2 w-full " />
          </div>
           <div className="p-2 w-full">
       <input type="text " placeholder="Last Name" className="border-b border-slate-500 w-full h-7 focus:outline-0 focus:border-b-2 " />
          </div>
          
        </div>
        <div className="flex justify-center items-center">
         <Button text="Submit"/>
        </div>
      </div>
    </div>
  );
};

export default Signin;