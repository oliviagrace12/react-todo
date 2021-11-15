import React, { useContext, useState } from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { StateContext } from './Contexts'
import { Button } from 'react-bootstrap'

export default function UserBar() {

    const { state } = useContext(StateContext)

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    if (state.user.username) {
        return <Logout />
    } else {
        return (
            <div className="justify-content-end">
                <Button onClick={e => setShowLogin(true)}>Login</Button>
                <Login show={showLogin} handleClose={() => setShowLogin(false)} />
                <Button onClick={e => setShowRegister(true)}>Register</Button>
                <Register show={showRegister} handleClose={() => setShowRegister(false)} />
            </div>
        )
    }
}