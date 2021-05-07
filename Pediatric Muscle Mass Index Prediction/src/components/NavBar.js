import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" className="position-fixed w-100">
      <Navbar.Brand href="/">KMITL</Navbar.Brand>
      <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/">
            หน้าแรก
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/about">
            เกี่ยวกับ
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} exact to="/calc">
            โปรแกรมคำนวณ
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
