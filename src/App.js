import React, { useState } from 'react'
import UserBar from './UserBar';
import CreateItem from './CreateItem'
import ItemList from './ItemList'

function App() {

  const [user, setUser] = useState('')
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
  const [items, setItems] = useState(initialItems)


  if (user) {
    return (
      <div>
        <UserBar user={user} setUser={setUser} />
        <br /><br /><hr /><br />
        <CreateItem user={user} items={items} setItems={setItems} />
        <ItemList items={items} />
      </div>
    )
  } else {
    return (
      <div>
        <UserBar user={user} setUser={setUser} />
        <br /><br /><hr /><br />
      </div>
    )
  }



}

export default App;
