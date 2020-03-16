import React from 'react';
import './App.css';
import {Nav,Navbar,NavDropdown,Form,FormControl,Button,Card,Jumbotron,Image,ListGroup,ListGroupItem,CardGroup} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


function Header(){
  return( 
  <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Jake's Mountain Welding</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Work</Nav.Link>
            <NavDropdown title="More info" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>   
  );
}

function PageJumbotron (){
  return (
    <div>
      <Jumbotron>
          <h1>Jake's Mountain Welding</h1>
          <p>
            Available for jobs across Western Colorado
          </p>
            <Image src="..\20151001_135507.jpg" fluid className = "mb-3"/>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
       </Jumbotron>
    </div>
  )

}

function Game (){
  return(
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="..\20160922_141205.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="..\20160914_154825.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="..\Hanging Lake.jpg" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>)

}

function App() {
  return (
    <div className="App">
      <Header/>
      <PageJumbotron/>
      <Game/>
      
    </div>
  );
}

export default App;
