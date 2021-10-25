import React, { useContext } from 'react'
import { StateContext } from './Contexts'
import Item from './Item'

export default function ItemList() {

    const { state } = useContext(StateContext)

    return (
        <div>
            <h2>To-Do List: </h2>
            {state.items && state.items.reverse().map((it, i) => <Item {...it}
                title={it.title}
                description={it.description}
                complete={it.complete}
                createdTime={it.createdTime}
                completedTime={it.completedTime}
                id={it.id}
            />)}
        </div>
    )
}