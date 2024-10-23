import { useState, useEffect } from "react";
import axios from "axios";
import up from "./image/edit.png"
import del from "./image/delete.png"
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Update=()=>{
 const [mydata, setMydata]=useState([]);
 const navigate= useNavigate();
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

const myRecDel=(id)=>{
    let api=`http://localhost:3001/Employ/?${Myid}`;
    axios.delete(api).then((res)=>{
         message.error("Your record Succesfully deleted!!!");
        loadData();
    })
}
const myEdit=(id)=>{
     navigate(`/editrec/${id}`)
}
 const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td> {key.empno} </td>
            <td> {key.name} </td>
            <td> {key.email} </td>
            <td> {key.contact} </td>
            <td> {key.Appintment} </td>
            <td> {key.time} </td>
            <td>

                <a href="#" onClick={()=>{myEdit(key.id)}}>
                   <img src={up} width="30" height="30" /> 
                 </a>


                 <a  href="#" onClick={()=>{myRecDel(key.id)}}>
                 <img src={del} width="30" height="30" /> 
                 </a>
            </td>

          </tr>
        
        </>
      )
 })

    return(
        <>
          <h1> Update Paient Records</h1>
          <table>
            <tr>
                <th> Paient No</th>
                <th>Paient Name</th>
                <th>Paient Email</th>
                <th>Paient Contact</th>
                <th>Paient Appointment date </th>
                <th>Paient appointment time</th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Update;