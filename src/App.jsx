import { BrowserRouter, Routes,Route ,} from "react-router-dom";




import Layout from "./layout";
import Home from "./home";
import About from "./about";

import Display from "./Display";
import Search from "./search";
import SearchByName from "./searchbyname";
import EditData from "./editdata";
import Update from "./update";
import Navbar from "./navv";



const App=()=>{
  return(
    <>
    
 
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route  path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
     
      <Route path="Home"  element={<Home/>}/>
      
      <Route path="About"  element={<About/>}/>
    
      <Route path="Display" element={<Display/>}/>
      <Route path="Search" element={<Search/>}/>
      <Route path="SearchbyName" element={<SearchByName/>}/>
      <Route path="Editdata/:myid" element={<EditData/>} />
      {/* <Route path="Update" element={<Update/>}/> */}
       </Route>
     </Routes>
   
     </BrowserRouter>
   
   
    </>
  )
}
export default App;
