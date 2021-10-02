import React, { useState } from 'react'

export default function CreateItem({ items, setItems }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function handleTitle(evt) { setTitle(evt.target.value) }
    function handleDescription(evt) { setDescription(evt.target.value) }

    function handleCreate() {
        const newItem = { title: title, description: description, complete: "false" }
        setItems([newItem, ...items])
    }

    return (
        <div>
            <h3>Create a new To-Do Item:</h3>
            <form onSubmit={e => { e.preventDefault(); handleCreate(); }}>
                <div>
                    <label htmlFor="create-title">Title: </label>
                    <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
                </div>
                <div>
                    <label htmlFor="create-description">Description: </label>
                    <br />
                    <textarea name="create-description" value={description} onChange={handleDescription} id="create-description" />
                </div>
                <div>
                    <input type="submit" value="Create" onChange />
                </div>
            </form>
        </div >
    )
}