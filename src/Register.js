import { Modal, Form, Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from './Contexts';

export default function Register({ show, handleClose }) {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordRepeat: ""
    })

    const { dispatch } = useContext(StateContext)

    const [status, setStatus] = useState("");

    const [user, register] = useResource((username, password) => ({
        url: 'auth/register',
        method: 'post',
        data: { username, password, 'passwordRepeat': password }
    }))

    useEffect(() => {
        if (user && user.isLoading === false && (user.data || user.error)) {
            if (user.error) {
                setStatus("Registration failed, please try again later.")
                alert("fail")
            } else {
                setStatus("Registration successful. You may now login.")
                alert("success")
            }
            // dispatch({ type: 'REGISTER', usename: user.data.username, access_token: user.data.access_token })
        }
    }, [user])

    return (
        <Modal show={show} hide={handleClose}>
            <Form onSubmit={e => { e.preventDefault(); register(formData.username, formData.password); handleClose(); }}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="register-username">Username:</Form.Label>
                    <Form.Control type="text" value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} name="register-username" id="register_username" />
                    <Form.Label htmlFor="register-password">Password:</Form.Label>
                    <Form.Control type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} name="register-password" id="register-password" />
                    <Form.Label htmlFor="register-password-repeat">Re-type password:</Form.Label>
                    <Form.Control type="password" value={formData.passwordRepeat} onChange={e => setFormData({ ...formData, passwordRepeat: e.target.value })} name="register-password-repeat" id="register-password-repeat" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button type="submit" disabled={formData.username.length === 0 | formData.password.length === 0 | formData.password !== formData.passwordRepeat}>Register</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}