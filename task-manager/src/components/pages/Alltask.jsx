import React ,{useState} from 'react';
import Card from '../Home/Card';
import { IoAddCircleOutline } from "react-icons/io5";
import InputData from '../Home/InputData';





function Alltask() {
  const [InputDiv,setInputDiv]=useState("hidden");
  return (
    <>
    <div>
        <div className='flex w-full items-end justify-end px-4 pb-0'>
            <button onClick={()=>setInputDiv("fixed")} >
        <IoAddCircleOutline className="text-3xl text-gray-400 hover:text-gray-100 transition-all duration-300 " />

            </button>
        </div>
      <Card home ={"true"} setInputDiv={setInputDiv} />
    </div>
    <div>
      <InputData InputDiv={InputDiv} setInputDiv={setInputDiv}/>
    </div>
    
    
    </>
  )
}

export default Alltask
