import React from 'react'

export default function Item({ title, description, dateCreated, complete, dateCompleted }) {
    return (
        <div>

            <h3>{title}</h3>
            <h5>{description}</h5>
            <h5><i>{dateCreated}</i></h5>
            <form>
                <label>
                    Completed
                    <input
                        name="isCompleted"
                        type="checkbox"
                        checked={complete} />
                </label>
            </form>

        </div>
    )
}