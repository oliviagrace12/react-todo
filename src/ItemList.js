import React from 'react'
import Item from './Item'

export default function ItemList({ items = [] }) {
    return (
        <div>
            {items.map((it) => <Item {...it} title={it.title} description={it.description} />)}
        </div>
    )
}