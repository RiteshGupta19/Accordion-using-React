import './App.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareMinus, faSquarePlus} from '@fortawesome/free-solid-svg-icons';
import data from './data.jsx';
import { useState } from 'react';

function App() {
  let [cli,clifunc]=useState(-1)
  let handle=(i)=>{
    clifunc((oldindex)=>(oldindex===i ? -1 : i))
  }
  return (
    <div className="App bg-pink-50 h-[100vh] pt-[100px]">
      
      <Func prop={cli} data={data} handle={handle}/>

    </div>
  );
}
let Func=({prop,data,handle})=>{
  return(
    <>
      {data.map((v,i)=>(
      <div className='w-[500px] m-auto mt-5' key={i}>
        <div className='flex p-4 justify-between border-2 bg-red-200 shadow-lg hover:bg-red-100'  >
          <h1>{v.question}</h1>            
              <FontAwesomeIcon onClick={()=>handle(i)} icon={prop===i ?  faSquareMinus :faSquarePlus } className='text-[#fff] px-[2px] text-[20px] bg-red-500 cursor-pointer hover:rotate-90 duration-500'/>
        </div>  
        <div className={`${prop===i ? 'scale-100  origin-top' : 'scale-0 h-[0px] origin-top'}`}>
           <h1 className=' bg-red-100 p-5 '>{v.answer}</h1>
        </div>
      </div>
  ))}
      </>
    )
  }
export default App;
