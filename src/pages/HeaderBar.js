import React, { useContext } from 'react'
import Header from '../Header'
import ChangeTheme from '../ChangeTheme'
import CreateItem from '../CreateItem'
import UserBar from '../UserBar'
import { StateContext, ThemeContext } from '../Contexts'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function HeaderBar({ setTheme }) {
    const theme = useContext(ThemeContext)
    const { state } = useContext(StateContext)
    const { user } = state

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Header text="My To-Do List"></Header></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><ChangeTheme theme={theme} setTheme={setTheme} /></Nav.Link>
                        </Nav>
                        <React.Suspense fallback="Loading...">
                            <UserBar />
                        </React.Suspense>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <br /><br /><hr /><br /> */}

        </>
    )
}