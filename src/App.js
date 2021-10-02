import React, { useState } from 'react'
import UserBar from './UserBar';
import CreateItem from './CreateItem'
import ItemList from './ItemList'

function App() {

  const [user, setUser] = useState('')


  if (user) {
    return (
      <div>
        <UserBar user={user} setUser={setUser} />
        <br /><br /><hr /><br />
        <h3>Create a new To-Do Item:</h3>
        <CreateItem user={user} />
        <h3>To-Do List</h3>
        <ItemList />
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
