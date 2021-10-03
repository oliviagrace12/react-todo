import React from 'react'

export default function Item({ title, description, complete, createdTime, completedTime, dispatch }) {

    if (complete === "true") {
        return (
            <div>
                <b>{title} </b>
                <br />
                <>{description} </>
                <br />
                <i>Created {createdTime}</i>
                <form>
                    <label htmlFor="isCompleted">Complete</label>
                    <input name="isCompleted" type="checkbox" checked={true} />
                </form>
                <i>Completed {completedTime}</i>
                <br />
                <button onClick={e => dispatch({ type: "DELETE_ITEM", title })}>Delete</button>
                <p />
            </div>
        )
    } else {
        return (
            <div>
                <b>{title} </b>
                <br />
                <>{description} </>
                <br />
                <i>Created {createdTime}</i>
                <form>
                    <label htmlFor="isCompleted">Complete</label>
                    <input name="isCompleted" type="checkbox" checked={false} />
                </form>
                <button onClick={e => dispatch({ type: "DELETE_ITEM", title })}>Delete</button>
                <p />
            </div >
        )
    }
}