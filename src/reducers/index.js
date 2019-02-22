import { combineReducers } from 'redux'
import todos from './todos/index'
import visibilityFilter from './visibility-filter/index'

const reducers = combineReducers({
    todos,
    visibilityFilter
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer