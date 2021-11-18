import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from './Contexts';
import { useResource } from 'react-request-hook'

export default function CreateItem() {

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

    const { dispatch, state } = useContext(StateContext)

    const [item, createItem] = useResource(({ title, description }) => ({
        url: '/item/create',
        method: 'post',
        headers: { "Authorization": `${state.user.access_token}` },
        data: { title, description, createdTime: Date(), complete: false, completedTime: undefined }
    }))

    function handleCreate(formData) {
        createItem({ title: formData.title, description: formData.description })
    }

    useEffect(() => {
        if (item && item.data && item.isLoading === false) {
            dispatch({ type: "CREATE_ITEM", title: item.data.title, description: item.data.description, createdTime: item.data.createdTime, complete: item.data.complete, id: item.data.id });
        }
    }, [item])

    return (
        <div>
            <h3>Create a new To-Do Item:</h3>
            <form onSubmit={e => { e.preventDefault(); handleCreate(formData) }}>
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