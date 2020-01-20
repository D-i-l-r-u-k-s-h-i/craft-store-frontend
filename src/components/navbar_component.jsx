import React from 'react'
import {NavDropdown, Navbar,Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBarComponent() {
    function loginBtn(){
        return(
            <Nav className="ml-auto">
                <Nav.Link href="/">Login</Nav.Link>
            </Nav>
        )
    }

    function content(){
        return(
            <Nav className="ml-auto">
                <Nav.Item className="p-2 mb-1 text-white">{localStorage.getItem("user")}</Nav.Item>
                <Nav.Link href="/cart"><span className="btn btn-light btn-circle btn-sm">&#128722;</span></Nav.Link>
                <NavDropdown title="&#9881; Options" id="nav-dropdown" >
                    <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
                    <LinkContainer to={{
                        pathname: '/orders1',
                        props: {
                            optionSelected: "CURRENT"
                        }
                    }}>
                        <NavDropdown.Item eventKey="4.2">Pending Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={{
                        pathname: '/orders2',
                        props: {
                            optionSelected: "PAST"
                        }
                    }}>
                        <NavDropdown.Item eventKey="4.3">Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer onClick={() => {

                        localStorage.removeItem("@token")
                        localStorage.clear()

                    }} to={{
                        pathname: '/',
                    }}>
                        <NavDropdown.Item eventKey="4.4">Logout</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                {localStorage.getItem("roleId") == 1 ? <Nav.Link href='/admin' >Dashboard</Nav.Link>
                : localStorage.getItem("roleId") == 3 ? <Nav.Link href='/creator' >Dashboard</Nav.Link>:null}
            </Nav>
        )
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">C&#8476;&#8491;ft Store &#9752;</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav>
                {localStorage.getItem("jwt")?content():loginBtn()}
            </Navbar>
            <br />
        </div>
    )
}

export default NavBarComponent