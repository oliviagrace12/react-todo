import React from 'react'

export default function Item({ title, description, complete, createdTime, completedTime, dispatch }) {

    return (
        <div>
            <b>{title} </b>
            <br />
            <>{description} </>
            <br />
            <i>Created time:  {createdTime}</i>
            <form onChange={e => dispatch({ type: "TOGGLE_ITEM", title, description, complete, createdTime, completedTime, dispatch })}>
                <label htmlFor="isCompleted">Complete</label>
                <input name="isCompleted" type="checkbox" checked={complete === "true"} />
            </form>
            <i>Completed time: {completedTime}</i>
            <br />
            <button onClick={e => dispatch({ type: "DELETE_ITEM", title })}>Delete</button>
            <p />
        </div>
    )

}