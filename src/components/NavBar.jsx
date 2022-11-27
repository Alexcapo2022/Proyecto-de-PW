import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >BUILD YOUR PC!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/PaginaPrincipal">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Support">Support</Nav.Link>
            <Nav.Link href="/Reviews">Reviews</Nav.Link>  
            <NavDropdown title="Ranking" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/RankingPC">Ranking de PCs</NavDropdown.Item>
              <NavDropdown.Item href="/RankingPerifericos">
                Ranking Perifericos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button id="icons" href="Buscar"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                </Form>
          <Nav>
          <Nav.Link href="/User" id="icons"><FontAwesomeIcon icon={faUser} /></Nav.Link>
          <Nav.Link href="/Carrito" id="icons"><FontAwesomeIcon icon={faCartShopping} color="white"/></Nav.Link>
          
          
                
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;