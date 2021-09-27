import React from 'react'
import CreateItem from './CreateItem'
import Item from './Item'
import ItemList from './ItemList'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar() {
    const user = ''
    if (user) {
        return (
            <>
                <Logout user={user} />
                <h3>Create To-Do Item</h3>
                <CreateItem />
                <h3>To-Do List</h3>
                <ItemList />
            </>
        )
    } else {
        return (
            <>
                <Login />
                <Register />
            </>
        )
    }
}