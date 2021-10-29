import { Modal, Form, Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from './Contexts';

export default function Login({ show, handleClose }) {

    const { dispatch } = useContext(StateContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginFailed, setLoginFailed] = useState(false)

    const [user, login] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                setLoginFailed(false)
                dispatch({ type: "LOGIN", username: user.data[0].username })
            } else {
                setLoginFailed(true)
            }
        }
    }, [user])

    return (
        <Modal show={show} hide={handleClose}>
            <Form onSubmit={e => { e.preventDefault(); login(username, password); handleClose(); }}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="login-username">Username:</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} name="login-username" id="login-username" />
                    <Form.Label htmlFor="login-password">Password:</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} name="login-password" id="login-password" />
                    {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button type="submit" disabled={username.length === 0 || password.length === 0}>Login</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}