import { useState, useEffect } from "react";
import axios from "axios";


const Display=()=>{
    const [empdata, setEmpdata]= useState([]);
    const loadData=()=>{
          let url="http://localhost:3001/Employ";
          axios.get(url).then((res)=>{
            console.log(res.data);
            setEmpdata(res.data);
          })
    }

    useEffect(()=>{
        loadData();
    }, [])

  const ans= empdata.map((key)=>{
    return(
        <>
          <tr>
            <td>{key.empno}</td>
           
            <td> {key.name} </td>
            <td> {key.email} </td>
            <td> {key.contact} </td>
            <td> {key.Appointment} </td>
            <td> {key.time} </td>
          </tr>
        </>
    )
  })
    return(
        <>
        <div className='d'>
         <h1>Display Data</h1>
         <table width="90%" border="1" className="table" >
            <tr>
                <th>patient no</th>
                <th>patient Name</th>
                <th>patient Email</th>
                <th> patient Contact no.</th>
                <th>Appointment date</th>
                <th>Appointment Time</th>
            </tr>
            {ans}
         </table>
         </div>
        </>
    )
}
export default Display;