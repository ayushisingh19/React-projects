import Carousel from 'react-bootstrap/Carousel';
import img from "./image/h1.avif";
import img1 from "./image/h2.avif";
import img2 from "./image/h3.jpg";
const Nav=()=>{
    return (
      <>
      <div className='c'>
     <h2>HOSPITAL VIEW</h2>
  <Carousel className='car'>
        <Carousel.Item>
          <img src={img} width="100%" height="500"/>
          <Carousel.Caption>
    
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img1 } width="100%"height="500"/>
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img2} width="100%" height="500"/>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </>
    )
  
  };
  export default Nav