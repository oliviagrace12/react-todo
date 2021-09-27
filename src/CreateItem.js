import React from 'react'

export default function CreateItem() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <div>
                <label htmlFor="create-title">Title: </label>
                <input type="text" name="create-title" id="create-title" />
            </div>
            <div>
                <label htmlFor="create-description">Description: </label>
                <br />
                <textarea name="create-description" id="create-description" />
            </div>
            <div>
                <input type="submit" value="Create" />
            </div>
        </form>
    )
}