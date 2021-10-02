import React, { useState } from 'react'

export default function Register({ setUser }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    function handleUsername(evt) { setUsername(evt.target.value) }
    function handlePassword(evt) { setPassword(evt.target.value) }
    function handlePasswordRepeat(evt) { setPasswordRepeat(evt.target.value) }


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
                    <label htmlFor="register-password-repeat">Re-type password:</label>
                    <input type="password" value={passwordRepeat} onChange={handlePasswordRepeat} name="register-password-repeat" id="register-password-repeat" />
                </div>
                <div>
                    <input type="submit" value="Register" disabled={username.length === 0 | password.length === 0 | password !== passwordRepeat} />
                </div>
            </form>
        </div>
    )
}