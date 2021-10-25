import React, { useContext, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook';
import { StateContext } from './Contexts';

export default function Login() {

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
        <div>
            <h3>Login</h3>
            <form onSubmit={e => { e.preventDefault(); login(username, password) }}>
                <div>
                    <label htmlFor="login-username">Username:</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} name="login-username" id="login-username" />
                </div>
                <div>
                    <label htmlFor="login-password">Password:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="login-password" id="login-password" />
                </div>
                <div>
                    <input type="submit" value="Login" disabled={username.length === 0 | password.length === 0} />
                </div>
            </form>
            {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
        </div>
    )
}