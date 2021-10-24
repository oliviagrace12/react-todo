import React, { useContext } from 'react'
import { StateContext, ThemeContext } from './Contexts'

export default function Item({ title, description, complete, createdTime, completedTime, id }) {

    const { secondaryColor } = useContext(ThemeContext)

    const { dispatch } = useContext(StateContext)

    return (
        <div>
            <h3 style={{ color: secondaryColor }}>{title} <br /></h3>
            <>{description} <br /></>
            <i>Created time:  {createdTime} <br /></i>
            <input type="checkbox" onClick={e => { dispatch({ type: 'TOGGLE_ITEM', complete: !complete, id: id }) }}></input>
            {complete && <i>Completed time: {completedTime}</i>}
            <br />
            <button onClick={e => { dispatch({ type: 'DELETE_ITEM', itemId: id }) }}>Delete</button>
            <p />
        </div>
    )

}