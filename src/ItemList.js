import React from 'react'
import Item from './Item'

export default function ItemList({ items = [], dispatch }) {
    return (
        <div>
            <h2>To-Do List: </h2>
            {items.map((it, i) => <Item {...it} title={it.title} description={it.description} complete={it.complete} createdTime={it.createdTime} key={'todo-' + i} />)}
        </div>
    )
}