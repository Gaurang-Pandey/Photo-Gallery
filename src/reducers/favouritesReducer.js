export function favouritesReducer(state, action) {
    switch (action.type) {
        case 'Toggle_Favourite':
            if(state.includes(action.id)){
                return state.filter((id) => id !== action.id)
            } else {
                return [...state, action.id]
            }
        default:
            return state
    }
}