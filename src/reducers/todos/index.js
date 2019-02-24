import { ADD_TODO, TOGGLE_TODO } from "./actions";
import createReducer from '../create-reducer'

export const initialState = [
    {id:0, text:'learn react native', completed: true},
    {id:1, text:'learn styled components', completed: false},
]

const todos = createReducer(initialState, {
    [ADD_TODO]: (state, action) => state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
    }),
    [TOGGLE_TODO]: (state, action) => state.map((todo) => ({
        ...todo,
        completed: todo.id === action.payload.id ? !todo.completed : todo.completed
    }))
})

export default todos