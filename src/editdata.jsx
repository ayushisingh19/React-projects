import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios";
import Update from "./update";
const EditData=()=>{
    const {myid} =useParams();
    const [mydata, setMydata]=useState(); // mydata={}
    const loadData=()=>{
      let api=`http://localhost:3001/Employ/?${Myid}`;
      axios.get(api).then((res)=>{
        console.log(res.data);
        setMydata(res.data);
      })
    }
    useEffect(()=>{
        loadData();
    }, []);
    const handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setMydata(values=>({...values, [name]:value}))
          console.log(mydata);
    }
   const handleSubmit=(e)=>{ 
      e.preventDefault();
    let api=`http://localhost:3001/Employ/?${Myid}`;
    axios.put(api, mydata).then((res)=>{
        message.success("Data succesfully updated!!!");
        setMydata({
            empno:"",
            name:"",
            email:"",
            contact:"",
            Appointment:"",
            time:""
        })
    })
   }
    return(
        <>
        <h1> Edit Patient Redcords :</h1>
        <form>
         Edit Patient no. <input type="text" name="empno" 
         value={mydata.empno} onChange={handleInput} />
         <br/>
         Edit Patient Name <input type="text" name="name" 
         value={mydata.name} onChange={handleInput} />
         <br/>
         Edit Patient Email <input type="text" name="email" 
         value={mydata.email}  onChange={handleInput}/>
         <br/>
         EditPatient Contact no. <input type="text" name="contact" 
         value={mydata.contact} onChange={handleInput} />
         <br/>
         Edit Patient appointment date. <input type="text" name="Appointment" 
         value={mydata.contact} onChange={handleInput} />
         <br/>
         Edit Patient appointment time. <input type="text" name="time" 
         value={mydata.contact} onChange={handleInput} />
         <br/>
         <button onClick={handleSubmit}>Update!</button>
         </form>
        </>
    )
}
export default EditData;