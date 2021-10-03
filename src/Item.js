import React from 'react'

export default function Item({ title, description, complete, createdTime, completedTime }) {

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
                <button>Delete</button>
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
                <button>Delete</button>
                <p />
            </div>
        )
    }
}