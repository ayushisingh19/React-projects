import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img6 from "./image/app.png"
const Appointment=()=>{
    const [input, setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
   const handleSubmit=()=>{
    let api="http://localhost:3001/Employ";
    axios.post(api, input).then((res)=>{
        console.log(res);
        toast.success("Data Save!!!")
    })
   }
    return(
        <>
        <div className='app'>
         <h1>BOOK NOW</h1>
         <h2><img src={img6} height="600" width="700" /></h2>
         <div className='from'>
         <h6> BOOK APPOINTMENT</h6>
         Enter Patient No : <input type="text" name="empno"  
         onChange={handleInput} />
         <br/>
         <br/>
         Enter Patient Name : <input type="text" name="name" 
          onChange={handleInput} />
         <br/>
         <br/>
         Enter Patient Email : <input type="text" name="email"  
         onChange={handleInput} />
         <br/>
         <br/>
         Enter Patient contact no. : <input type="text" name="contact"  
         onChange={handleInput} />
         <br/>
         <br/>
         Enter Appointment Date . : <input type="Date" name="Appointment"  
         onChange={handleInput} />
         <br/>
         <br/>
         Enter Appointment Time . : <input type="Time" name="time"  
         onChange={handleInput} />
         <br/>
         <br/>
         <button onClick={handleSubmit}>Save!!!</button>
         </div>
         <ToastContainer />
         </div>
        </>
    )
}
export default Appointment;