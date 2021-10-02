import React from 'react'

export default function Item({ title, description, complete }) {


    return (
        <div>
            <form>
                <label>
                    <input
                        name="isCompleted"
                        type="checkbox"
                        checked={complete === "true"} />
                </label>
            </form>
            <h4>Title: {title} </h4>
            <i>Description: {description} </i>
            <p />
        </div>
    )
}