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
        case 'FETCH_ITEMS':
            return action.items;
        case 'CREATE_ITEM':
            const newItem = {
                title: action.title,
                description: action.description,
                complete: action.complete,
                createdTime: action.createdTime,
                id: action.id
            }
            return [newItem, ...state]
        case 'TOGGLE_ITEM':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.complete = action.complete
                    item.completedTime = Date();
                }
                return item
            })
        case 'DELETE_ITEM':
            return state.filter((item) => item.id !== action.itemId)
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