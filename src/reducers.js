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
            const newItem = { title: action.title, description: action.description, complete: "false" }
            return [newItem, ...state]
        case 'TOGGLE_ITEM':
        // todo
        case 'DELETE_ITEM':
        //todo
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