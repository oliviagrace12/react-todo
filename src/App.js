import React, { useReducer, useEffect } from 'react'
import UserBar from './UserBar';
import CreateItem from './CreateItem'
import ItemList from './ItemList'
import appReducer from './reducers'

function App() {

  const initialItems = [
    {
      title: "Get groceries",
      description: "Eggs, milk",
      createdTime: Date(),
      complete: "true",
      completedTime: Date()
    },
    {
      title: "Clean",
      description: "Kitchen, bathroom",
      createdTime: Date(),
      complete: "false"
    }
  ]

  const [state, dispatch] = useReducer(appReducer, { user: '', items: initialItems })
  const { user, items } = state

  useEffect(() => {
    if (user) {
      document.title = `${user}'s To-Do List`
    } else {
      document.title = 'To-Do List'
    }
  }, [user])

  if (state.user) {
    return (
      <div>
        <UserBar user={user} dispatchUser={dispatch} />
        <br /><br /><hr /><br />
        <CreateItem user={user} items={state.items} dispatchItems={dispatch} />
        <ItemList items={items} dispatch={dispatch} />
      </div>
    )
  } else {
    return (
      <div>
        <UserBar user={user} dispatchUser={dispatch} />
        <br /><br /><hr /><br />
        <ItemList items={items} dispatch={dispatch} />
      </div>
    )
  }



}

export default App;
