import { ADD_TODO, TOGGLE_TODO } from "./actions";

export const initialState = []

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        case TOGGLE_TODO:
            return state.map((todo) => ({
                ...todo,
                completed: todo.id === action.payload.id ? !todo.completed : todo.completed
            }))
        default:
            return state
    }
}

export default todos