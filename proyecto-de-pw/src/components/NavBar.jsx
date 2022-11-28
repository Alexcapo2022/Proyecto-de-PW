import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../estilos/index.css';
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
          <li><form className="d-flex" role="search">
    <input type="search" id="inputss-search" placeholder="Buscar aqui" />
    <div className="contentss-search">
      <div className="contentss-table">
        <table id="tabless">
          <thead>
            <tr>
              <td />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="/specs products/asusrtx3070.html">NVIDIA RTX 3070
                  <img src="/specs products/media/3070 1.jpg" />
                </a></td>    
            </tr>
            <tr>
              <td><a href="/specs products/rtx 2070 super.html">NVIDIA RTX 2070 
                  <img src="/specs products/media/GEFORCE RTX 2070 SUPER.png" /></a></td>
            </tr>
            <tr>
              <td><a href="/specs products/windows 11 home.html">WINDOWS 11 HOME
                  <img src="/specs products/media/windows-11-home.jpg" /></a></td>
            </tr>
            <tr>
              <td><a href="/specs products/windows 10 pro.html">WINDOWS 10PRO
                  <img src="/specs products/media/W10-HOME.jpeg" /></a></td>
            </tr>
            <tr>
              <td><a href="/specs products/i3 10gen.html">INTEL CORE I3
                  <img src="/specs products/media/I3 2.jpg" /></a></td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
    <button className="btn btn-info" id="index" type="submit">Search</button>
  </form></li>

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