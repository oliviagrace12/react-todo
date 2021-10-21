import React from 'react'

export default function Item({ title, description, complete, createdTime, completedTime, dispatch, itemId }) {

    return (
        <div>
            <b>{title} <br /></b>
            <>{description} <br /></>
            <i>Created time:  {createdTime} <br /></i>
            <input type="checkbox" onClick={e => { dispatch({ type: 'TOGGLE_ITEM', complete: !complete, itemId: itemId }) }}></input>
            {complete && <i>Completed time: {completedTime}</i>}
            <br />
            <button onClick={e => { dispatch({ type: 'DELETE_ITEM', itemId: itemId }) }}>Delete</button>
            <p />
        </div>
    )

}