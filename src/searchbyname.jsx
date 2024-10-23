import { useState } from "react";
import axios from "axios";
const SearchByName=()=>{
    const [ename, setEname]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleChange=(e)=>{
        let empname= e.target.value;
        setEname(empname);
        let api=`http://localhost:3001/Employ`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
          let str= key.name;
           let mystatus=str.includes(ename);
           console.log(mystatus);
         if (mystatus)
            {  
          return(
            <>
             <tr>
              <td> {key.empno}</td>
              <td>  {key.name} </td>
              <td> {key.email} </td>
              <td>  {key.contact}</td>
              <td>  {key.Appointment}</td>
              <td>  {key.time}</td>
              </tr>
            </>
          )
        }
    })

    return(
        <>
          <h1> Search Patient Records</h1>
Type Patient Name  : <input type="text" value={ename} onChange={handleChange} />
          
          <hr size="5" color="green"/>
          <table border='1' width="1528" className='table'>
            <tr >
                <th> Patient No</th>
                <th> Patient Name</th>
                <th>Patient Email</th>
                <th>Patient Contact</th>
                <th>Appointment date</th>
                <th>Appointment time</th>
            </tr>
          
            {ans}
          </table>
        </>
    )
}
export default SearchByName;