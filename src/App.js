import React, { useReducer, useEffect, useState } from 'react'
import UserBar from './UserBar';
import CreateItem from './CreateItem'
import ItemList from './ItemList'
import appReducer from './reducers'
import Header from './Header'
import { ThemeContext, StateContext } from './Contexts'
import ChangeTheme from './ChangeTheme';

function App() {

  const initialItems = [
    {
      title: "Get groceries",
      description: "Eggs, milk",
      createdTime: Date(),
      complete: false,
      completedTime: undefined,
      key: "key1"
    },
    {
      title: "Clean",
      description: "Kitchen, bathroom",
      createdTime: Date(),
      complete: false,
      completedTime: undefined,
      key: "key2"
    }
  ]

  const [state, dispatch] = useReducer(appReducer, { user: '', items: initialItems })
  const { user, items } = state;
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

}

export default App;
