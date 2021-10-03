import React, { useReducer } from 'react'
import UserBar from './UserBar';
import CreateItem from './CreateItem'
import ItemList from './ItemList'

function App() {

  const initialItems = [
    {
      title: "todo 1",
      description: "desc 1",
      complete: "true"
    },
    {
      title: "todo 2",
      description: "desc 2",
      complete: "false"
    }
  ]

  function userReducer(state, action) {
    switch (action.type) {
      case 'LOGIN':
      case 'REGISTER':
        return action.username
      case 'LOGOUT':
        return ''
      default:
        throw new Error()
    }
  }



  const [user, dispatchUser] = useReducer(userReducer, '')
  const [items, dispatchItems] = useReducer(itemReducer, initialItems)

  function itemReducer(state, action) {
    switch (action.type) {
      case 'CREATE_ITEM':
        const newItem = { title: action.title, description: action.description, complete: "false" }
        return [newItem, ...state]
      default:
        throw new Error()
    }
  }

  if (user) {
    return (
      <div>
        <UserBar user={user} dispatchUser={dispatchUser} />
        <br /><br /><hr /><br />
        <CreateItem user={user} items={items} dispatchItems={dispatchItems} />
        <ItemList items={items} />
      </div>
    )
  } else {
    return (
      <div>
        <UserBar user={user} dispatchUser={dispatchUser} />
        <br /><br /><hr /><br />
      </div>
    )
  }



}

export default App;
