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
            return state.map(it => {
                if (it.title === action.title && it.complete === "false") {
                    return { title: action.title, description: action.description, createdTime: action.createdTime, complete: "true", completedTime: Date() }
                } else if (it.title === action.title && it.complete === "true") {
                    return { title: action.title, description: action.description, createdTime: action.createdTime, complete: "false", completedTime: null }
                } else {
                    return it
                }
            })
        case 'DELETE_ITEM':
            return state.filter(it => it.title !== action.title)
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