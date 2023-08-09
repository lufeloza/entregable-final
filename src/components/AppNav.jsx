
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
function AppNav() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg bg-primary" bg="dark" data-bs-theme="dark">
      <Container>

        <Navbar.Brand as = {Link} to = '/'>ECOMMERCE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = '/loguin'><i className='bx bx-user'></i></Nav.Link>
            <Nav.Link as = {Link} to = '/purchases'><i className='bx bx-box' ></i></Nav.Link>
            <Sidebar></Sidebar>          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;