import React, { useState } from 'react'

export default function Login({ setUser }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(evt) { setUsername(evt.target.value) }
    function handlePassword(evt) { setPassword(evt.target.value) }

    return (
        <div>
            <h3>Create Account</h3>
            <form onSubmit={e => { e.preventDefault(); setUser(username) }}>
                <div>
                    <label htmlFor="register-username">Username:</label>
                    <input type="text" value={username} onChange={handleUsername} name="register-username" id="register_username" />
                </div>
                <div>
                    <label htmlFor="register-password">Password:</label>
                    <input type="password" value={password} onChange={handlePassword} name="register-password" id="register-password" />
                </div>
                <div>
                    <input type="submit" value="Register" disabled={username.length === 0 | password.length === 0} />
                </div>
            </form>
        </div>
    )
}