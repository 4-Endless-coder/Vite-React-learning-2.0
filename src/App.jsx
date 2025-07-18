import React from 'react'
import Button from 'react-bootstrap/Button';
import { Alert, Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Alert variant='success'>Hello, BT installed</Alert>
      
      <Button onClick={()=>alert("Bootstrap Button")} variant='danger'>Bootstrap Button</Button>
      <Button variant='warning'>Ok</Button>
      <Button variant='info'>Ok</Button>
      <button onClick={()=>alert("Simple Button")}>Simple Button</button>
    </div>
  )
}

export default App
