import React, { useContext, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from './Contexts';

export default function Register() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordRepeat: ""
    })

    const { dispatch } = useContext(StateContext)

    const [user, register] = useResource((username, password) => ({
        url: '/users',
        method: 'post',
        data: { username, password }
    }))

    useEffect(() => {
        if (user && user.data) {
            dispatch({ type: "REGISTER", username: user.data.username })
        }
    }, [user])

    return (
        <div>
            <h3>Create Account</h3>
            <form onSubmit={e => { e.preventDefault(); register(formData.username, formData.password) }}>
                <div>
                    <label htmlFor="register-username">Username:</label>
                    <input type="text" value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} name="register-username" id="register_username" />
                </div>
                <div>
                    <label htmlFor="register-password">Password:</label>
                    <input type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} name="register-password" id="register-password" />
                </div>
                <div>
                    <label htmlFor="register-password-repeat">Re-type password:</label>
                    <input type="password" value={formData.passwordRepeat} onChange={e => setFormData({ ...formData, passwordRepeat: e.target.value })} name="register-password-repeat" id="register-password-repeat" />
                </div>
                <div>
                    <input type="submit" value="Register" disabled={formData.username.length === 0 | formData.password.length === 0 | formData.password !== formData.passwordRepeat} />
                </div>
            </form>
        </div>
    )
}