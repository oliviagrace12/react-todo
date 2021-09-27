import React from 'react'

export default function Login() {
    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={e => e.preventDefault()}>
                <div>
                    <label htmlFor="login-username">Username:</label>
                    <input type="text" name="login-username" id="login-username" />
                </div>
                <div>
                    <label htmlFor="login-password">Password:</label>
                    <input type="password" name="login-password" id="login-password" />
                </div>

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}