import React, { Component } from 'react'
 import{ Navbar,Container,Nav} from 'react-bootstrap/'
 import 'bootstrap/dist/css/bootstrap.min.css'

 class Header extends Component {
    render() {
        return (
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/favorite">FavoriteDigimons</Nav.Link>
      <Nav.Link href="/">My digimon</Nav.Link>
    
    </Nav>
    </Container>
  </Navbar>
                
           
        )
    }
}

export default Header
