import React, { useContext } from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { StateContext } from './Contexts'

export default function UserBar() {

    const { state } = useContext(StateContext)

    if (state.user) {
        return <Logout />
    } else {
        return (
            <>
                <Login />
                <Register />
            </>
        )
    }
}