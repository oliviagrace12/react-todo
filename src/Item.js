import React from 'react'

export default function Item({ title, description, complete }) {
    // return (
    //     <div>
    //         <form>
    //             <label>
    //                 <input
    //                     name="isCompleted"
    //                     type="checkbox"
    //                     checked={complete} />
    //             </label>
    //             <label>{title}</label>
    //             <br></br>
    //             <label>{description}</label>
    //             <br></br>
    //             <label>{Date.now}</label>
    //             <br></br>
    //             <label>{Date.now}</label>
    //         </form>
    //     </div>
    // )

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