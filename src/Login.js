import React, { useState } from 'react'

export default function Login({ dispatchUser }) {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={e => { e.preventDefault(); dispatchUser({ type: 'LOGIN', username: formData.username }) }}>
                <div>
                    <label htmlFor="register-username">Username:</label>
                    <input type="text" value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} name="register-username" id="register_username" />
                </div>
                <div>
                    <label htmlFor="register-password">Password:</label>
                    <input type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} name="register-password" id="register-password" />
                </div>
                <div>
                    <input type="submit" value="Login" disabled={formData.username.length === 0 | formData.password.length === 0} />
                </div>
            </form>
        </div>
    )
}