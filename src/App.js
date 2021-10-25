import React, { useReducer, useEffect, useState } from 'react'
import UserBar from './UserBar';
import CreateItem from './CreateItem'
import ItemList from './ItemList'
import appReducer from './reducers'
import Header from './Header'
import { ThemeContext, StateContext } from './Contexts'
import ChangeTheme from './ChangeTheme';
import { useResource } from 'react-request-hook';

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
            <Header text="My To-Do List"></Header>
            <ChangeTheme theme={theme} setTheme={setTheme} />
            <UserBar />
            <br /><br /><hr /><br />
            <CreateItem />
            <ItemList />
          </StateContext.Provider>
        </ThemeContext.Provider>
      </div>
    )
  } else {
    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
            <Header text="My To-Do List"></Header>
            <ChangeTheme theme={theme} setTheme={setTheme} />
            <UserBar />
            <br /><br /><hr /><br />
            <ItemList />
          </StateContext.Provider>
        </ThemeContext.Provider>
      </div>
    )
  }



}

export default App;
