import React, { useReducer, useEffect, useState } from 'react'
import UserBar from './UserBar';
import CreateItem from './CreateItem'
import ItemList from './ItemList'
import appReducer from './reducers'
import Header from './Header'
import { ThemeContext, StateContext } from './Contexts'
import ChangeTheme from './ChangeTheme';
import { useResource } from 'react-request-hook';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

function App() {

  const [items, getItems] = useResource(() => ({
    url: '/items',
    method: 'get'
  }))

  const [state, dispatch] = useReducer(appReducer, { user: '', items: [] })

  useEffect(getItems, [])

  useEffect(() => {
    if (items && items.data) {
      dispatch({ type: 'FETCH_ITEMS', items: items.data.reverse() })
    }
  }, [items])

  const { user } = state;

  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

  useEffect(() => {
    if (user) {
      document.title = `${user}'s To-Do List`
    } else {
      document.title = 'To-Do List'
    }
  }, [user])

  if (user) {
    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Container>

              <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand><Header text="My To-Do List"></Header></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link><ChangeTheme theme={theme} setTheme={setTheme} /></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <UserBar />
              <br /><br /><hr /><br />
              <CreateItem />
              <ItemList />
            </Container>
          </StateContext.Provider>
        </ThemeContext.Provider>
      </div>
    )
  } else {
    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Container>
              <Navbar bg="light" expand="lg">
                <Container>
                  <Navbar.Brand><Header text="My To-Do List"></Header></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link ><ChangeTheme theme={theme} setTheme={setTheme} /></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <UserBar />
              <br /><br /><hr /><br />
              <ItemList />
            </Container>
          </StateContext.Provider>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App;
