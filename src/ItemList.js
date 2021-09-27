import React from 'react'
import Item from './Item'

export default function ItemList({ items = [] }) {
    return (
        <div>
            {items.map((p, i) => <Item {...i} title={i.title} description={i.description} key={'post-' + i} />)}
        </div>
        // <div>
        //     <ul>{items}</ul>
        // </div>
    )
}