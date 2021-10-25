import React, { useContext, useEffect, useState } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext, ThemeContext } from './Contexts'

export default function Item({ title, description, complete, createdTime, completedTime, id }) {

    const { secondaryColor } = useContext(ThemeContext)

    const { dispatch } = useContext(StateContext)

    const [item, setComplete] = useResource((id, complete) => ({
        url: `/items/${encodeURI(id)}`,
        method: 'patch',
        data: { complete }
    }))

    useEffect(() => {
        if (item && item.data) {
            dispatch({ type: 'TOGGLE_ITEM', complete: item.data.complete, id: item.data.id })
        }
    }, [item])

    return (
        <div>
            <h3 style={{ color: secondaryColor }}>{title} <br /></h3>
            <>{description} <br /></>
            <i>Created time:  {createdTime} <br /></i>
            <input type="checkbox" defaultChecked={complete} onClick={e => { setComplete(id, !complete) }}></input>
            {complete && <i>Completed time: {completedTime}</i>}
            <br />
            <button onClick={e => { dispatch({ type: 'DELETE_ITEM', itemId: id }) }}>Delete</button>
            <p />
        </div>
    )

}