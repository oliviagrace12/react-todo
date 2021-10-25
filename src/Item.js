import React, { useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext, ThemeContext } from './Contexts'

export default function Item({ title, description, complete, createdTime, completedTime, id }) {

    const { secondaryColor } = useContext(ThemeContext)

    const { dispatch } = useContext(StateContext)

    const [item, setComplete] = useResource((id, complete, completedTime) => ({
        url: `/items/${encodeURI(id)}`,
        method: 'patch',
        data: { complete, completedTime }
    }))

    useEffect(() => {
        if (item && item.data) {
            dispatch({ type: 'TOGGLE_ITEM', complete: item.data.complete, id: item.data.id })
        }
    }, [item])

    function handleComplete(id, complete) {
        if (complete === true) {
            setComplete(id, complete, Date())
        } else {
            setComplete(id, complete, undefined)
        }
    }

    const [deletedId, doDelete] = useResource((id) => ({
        url: `/items/${encodeURI(id)}`,
        method: 'delete'
    }))

    useEffect(() => {
        if (deletedId) {
            dispatch({ type: 'DELETE_ITEM', itemId: id })
        }
    }, [deletedId])

    return (
        <div>
            <h3 style={{ color: secondaryColor }}>{title} <br /></h3>
            <>{description} <br /></>
            <i>Created time:  {createdTime} <br /></i>
            <input type="checkbox" defaultChecked={complete} onClick={e => { handleComplete(id, !complete) }}></input>
            {complete && <i>Completed time: {completedTime}</i>}
            <br />
            <button onClick={e => { doDelete(id) }}>Delete</button>
            <p />
        </div>
    )
}