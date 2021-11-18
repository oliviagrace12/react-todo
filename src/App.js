import React, { useReducer, useEffect, useState } from 'react'
import ItemList from './ItemList'
import appReducer from './reducers'
import { ThemeContext, StateContext } from './Contexts'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import HeaderBar from './pages/HeaderBar';
import HomePage from './pages/HomePage';

function App() {

  const [state, dispatch] = useReducer(appReducer, { user: {}, items: [] })

  const { user } = state;

  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

  useEffect(() => {
    if (user.username) {
      document.title = `${user.username}'s To-Do List`
    } else {
      document.title = 'To-Do List'
    }
  }, [user])


  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Container>
            <HeaderBar setTheme={setTheme} />
            {user.username && <HomePage />}
          </Container>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
