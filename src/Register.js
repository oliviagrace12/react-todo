import React from 'react'

export default function Register() {
    return (
        <div>
            <h3>Create Account</h3>
            <form onSubmit={e => e.preventDefault()}>
                <div>
                    <label htmlFor="register-username">Username:</label>
                    <input type="text" name="register-username" id="register_username" />
                </div>
                <div>
                    <label htmlFor="register-password">Password:</label>
                    <input type="password" name="register-password" id="register-password" />
                </div>
                <div>
                    <label htmlFor="register-password-repeat">Re-type password:</label>
                    <input type="password" name="register-password-repeat" id="register-password-repeat" />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}