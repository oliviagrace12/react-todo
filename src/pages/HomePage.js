import { useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../Contexts";
import CreateItem from "../CreateItem";
import ItemList from "../ItemList";

export default function HomePage() {
    const { state, dispatch } = useContext(StateContext)
    const [items, getItems] = useResource(() => ({
        url: '/item/get',
        method: 'get',
        headers: { "Authorization": `${state.user.access_token}` }
    }))

    useEffect(getItems, {})

    useEffect(() => {
        if (items && items.isLoading === false && (items.error || items.data)) {
            if (items.error) {
                console.log(items.error.message())
            } else {
                dispatch({ type: 'FETCH_ITEMS', items: items.data.reverse() })
            }
        }
    }, [items])

    return (
        <>
            <CreateItem />
            <br />
            {items.isLoading && 'To-Do Items Loading'} <ItemList />
        </>
    )
}