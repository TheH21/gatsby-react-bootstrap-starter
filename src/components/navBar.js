import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar bg="primary" expand="lg">
    <Container id="navContent">
    <Link to="/">
    <img src={logo} id="logo" alt=""></img>
    </Link>
    <div class="float-right">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Page 2
              </Nav.Link>
            </Link>
          </Nav>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
    </div>
      <Container id="whiteBox" class="fixed-bottom">
          <Container id="navCategs">
            <p>Hey</p>
          </Container>
      </Container>
    </Container>
</Navbar>

    </>
  )
}

export default CustomNavbar
