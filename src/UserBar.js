import React from 'react'
import CreateItem from './CreateItem'
import ItemList from './ItemList'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar() {
    const user = ''
    // const user = 'Dale Cooper'

    if (user) {
        const list = [
            {
                title: "Todo Title",
                description: "Description of todo",
                complete: false
            },
            {
                title: "Todo Title",
                description: "Description of todo",
                complete: false
            },
            {
                title: "Todo Title",
                description: "Description of todo",
                complete: false
            },
            {
                title: "Todo Title",
                description: "Description of todo",
                complete: false
            }
        ]

        return (
            <>
                <Logout user={user} />
                <h3>Create To-Do Item</h3>
                <CreateItem />
                <h3>To-Do List</h3>
                <ItemList items={list} />
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