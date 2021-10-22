import React, { useContext, useState } from 'react'
import { StateContext } from './Contexts';

export default function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const { dispatch } = useContext(StateContext)

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={e => { e.preventDefault(); dispatch({ type: "LOGIN", username: formData.username }) }}>
                <div>
                    <label htmlFor="login-username">Username:</label>
                    <input type="text" value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} name="login-username" id="login-username" />
                </div>
                <div>
                    <label htmlFor="login-password">Password:</label>
                    <input type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} name="login-password" id="login-password" />
                </div>
                <div>
                    <input type="submit" value="Login" disabled={formData.username.length === 0 | formData.password.length === 0} />
                </div>
            </form>
        </div>
    )
}