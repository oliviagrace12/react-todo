import React, { useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { StateContext, ThemeContext } from './Contexts'
import { Card, Button } from 'react-bootstrap'

export default function Item({ title, description, complete, createdTime, completedTime, id }) {

    const { secondaryColor } = useContext(ThemeContext)

    const { dispatch } = useContext(StateContext)

    const [item, setComplete] = useResource((id, complete, completedTime) => ({
        url: `/items/${encodeURI(id)}`,
        method: 'patch',
        data: { complete, completedTime }
    }))

    useEffect(() => {
        if (item && item.data && item.isLoading === false) {
            dispatch({ type: 'TOGGLE_ITEM', complete: item.data.complete, id: item.data.id })
        }
    }, [item])

    function handleComplete(id, complete) {
        if (complete === true) {
            setComplete(id, complete, Date())
        } else {
            setComplete(id, complete, null)
        }
    }

    const [deleted, doDelete] = useResource((id) => ({
        url: `/items/${encodeURI(id)}`,
        method: 'delete'
    }))

    useEffect(() => {
        if (deleted && deleted.data && deleted.isLoading === false) {
            dispatch({ type: 'DELETE_ITEM', itemId: id })
        }
    }, [deleted])

    return (
        <Card>
            <Card.Header style={{ color: secondaryColor }} as="h5">
                <input type="checkbox" defaultChecked={complete} onClick={e => { handleComplete(id, !complete) }}></input> {title}
            </Card.Header>
            <Card.Body>
                <Card.Title>{description}</Card.Title>

                <Card.Text> <i>Created time:  {createdTime} <br /></i> </Card.Text>
                {/* <Card.Text> <input type="checkbox" defaultChecked={complete} onClick={e => { handleComplete(id, !complete) }}></input></Card.Text> */}
                <Card.Text> {complete && <i>Completed time: {completedTime}</i>} </Card.Text>

                <Button onClick={e => { doDelete(id) }}>Delete</Button>
            </Card.Body>
        </Card>
    )
}