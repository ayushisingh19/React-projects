import { useState } from "react";
import axios from "axios";
const Search=()=>{
    const [eno, setEno]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleSubmit=()=>{
        let api=`http://localhost:3001/Employ/?empno=${eno}`
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
          return(
            <>
            <div className='pserach'>
              <h1> Patient NO: {key.empno}</h1>
              <h2>Patient Name : {key.name} </h2>
              <h2>Patient Email: {key.email} </h2>
              <h2>Patient Contact no: {key.contact}</h2>
              <h2> Patient Appointment: {key.Appointment}</h2>
              <h2>Patient App Time: {key.time}</h2>
              </div>
            </>
          )
    })
    return(
        <>
          <h1> Search Patient Records</h1>
Enter Patient  No. : <input type="text" value={eno} 
onChange={(e)=>{setEno(e.target.value)}} />
          <button onClick={handleSubmit}>search</button>
        
          <hr size="5" color="green"/>
          { ans }    
        </>
    )
}
export default Search;