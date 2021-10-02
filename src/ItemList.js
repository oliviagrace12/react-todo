import React from 'react'
import Item from './Item'

export default function ItemList({ items = [] }) {
    return (
        <div>
            <h3>To-Do List: </h3>
            {items.map((it) => <Item {...it} title={it.title} description={it.description} complete={it.complete} />)}
        </div>
    )
}