import {Link,Outlet} from "react-router-dom";

const Layout=()=>{
  return(
    <>
    
{/* 
    <Link to="home">Home!</Link>
    
    <Link to="about">About!</Link>
  
   
    <Link to="Display">Display!</Link>
    <Link to="Search">Search!</Link>
    <Link to="SearchByName">SearchByName!</Link> */}
    <Outlet/>
    
    </>
  )
}
export default Layout;