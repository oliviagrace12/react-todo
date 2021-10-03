function userReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state
    }
}

function itemReducer(state, action) {
    switch (action.type) {
        case 'CREATE_ITEM':
            const newItem = { title: action.title, description: action.description, complete: "false", createdTime: Date() }
            return [newItem, ...state]
        case 'TOGGLE_ITEM':
            const itemList = [...state]
            const toggledItem = itemList.find(it => it.key === action.key)
            toggledItem.complete = !toggledItem.complete
            return
        case 'DELETE_ITEM':
            break
        default:
            return state
    }
}

export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        items: itemReducer(state.items, action)
    }
}