import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';






const Cart=()=>{
return(
  <>
<div className='ser'>

<h1>OUR SERVICES</h1>
<Container fluid>
      <Row >
        <Col md={4} className='cartt'>
        <Card>
        <Card.Body>
        <Card.Title><i class="fa-solid fa-user-doctor"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">FREE CHECKUP</Card.Subtitle>
        <Card.Text>
      Ipsum molestias ut, nisi ipsa necessitatibus debitis recusandae vitae  <br/>cupiditate officia in voluptate voluptas reprehenderit.
        </Card.Text>
       <Card.Text>
     <button>LEARN MORE</button>
       </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        
        
        </Col> 


        <Col md={4} className='cartt'>
        <Card>
        <Card.Body>
        <Card.Title><i class="fa-solid fa-truck-medical"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">24/7 AMBULANCE</Card.Subtitle>
      
        <Card.Text>
      Ipsum molestias ut, nisi ipsa necessitatibus debitis recusandae vitae  <br/>cupiditate officia in voluptate voluptas reprehenderit.
        </Card.Text>
       <Card.Text>
     <button>LEARN MORE</button>
     </Card.Text>
       
        
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        
        
        </Col>


        <Col md={4}className='cartt' >
        <Card>
        <Card.Body>
        <Card.Title><i class="fa-solid fa-user-doctor"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">EXPERTS CONSULTANCY</Card.Subtitle>
        <Card.Text>
      Ipsum molestias ut, nisi ipsa necessitatibus debitis recusandae vitae  <br/>cupiditate officia in voluptate voluptas reprehenderit.
        </Card.Text>
       <Card.Text>
     <button>LEARN MORE</button>
     </Card.Text>
     
        
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        
        
        </Col>
        <Col md={4}className='cartt' >
        <Card>
        <Card.Body>
        <Card.Title><i class="fa-solid fa-heart-pulse"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">TOTAL CARE</Card.Subtitle>
        <Card.Text>
      Ipsum molestias ut, nisi ipsa necessitatibus debitis recusandae vitae  <br/>cupiditate officia in voluptate voluptas reprehenderit.
        </Card.Text>
       <Card.Text>
     <button>LEARN MORE</button>
     </Card.Text>
     
        
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        
        
        </Col>
        <Col md={4}className='cartt' >
        <Card>
        <Card.Body>
        <Card.Title><i class="fa-solid fa-pills"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">MEDICINES</Card.Subtitle>
        <Card.Text>
      Ipsum molestias ut, nisi ipsa necessitatibus debitis recusandae vitae  <br/>cupiditate officia in voluptate voluptas reprehenderit.
        </Card.Text>
       <Card.Text>
     <button>LEARN MORE</button>
     </Card.Text>
     
        
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        
        
        </Col>
        <Col md={4} className='cartt'>
        <Card>
        <Card.Body>
        <Card.Title><i class="fa-solid fa-bed"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">BED FACILITY</Card.Subtitle>
        <Card.Text>
      Ipsum molestias ut, nisi ipsa necessitatibus debitis recusandae vitae  <br/>cupiditate officia in voluptate voluptas reprehenderit.
        </Card.Text>
       <Card.Text>
     <button>LEARN MORE</button>
     </Card.Text>
     
        
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        
        
        </Col>
        
      </Row>
      </Container>
      </div>
  </>
)
}
export default Cart