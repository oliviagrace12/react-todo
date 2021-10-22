import React, { useContext, useState } from 'react'
import { StateContext } from './Contexts';

export default function CreateItem() {

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

    const { dispatch } = useContext(StateContext)

    return (
        <div>
            <h3>Create a new To-Do Item:</h3>
            <form onSubmit={e => { e.preventDefault(); dispatch({ type: "CREATE_ITEM", title: formData.title, description: formData.description, dispatch: dispatch, }); }}>
                <div>
                    <label htmlFor="create-title">Title: </label>
                    <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} name="create-title" id="create-title" />
                </div>
                <div>
                    <label htmlFor="create-description">Description: </label>
                    <br />
                    <textarea name="create-description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} id="create-description" />
                </div>
                <div>
                    <input type="submit" value="Create" onChange />
                </div>
            </form>
        </div >
    )
}