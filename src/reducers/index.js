import { combineReducers } from 'redux'
import todos from './todos/index'
import visibilityFilter from './visibility-filter/index'
import address from './address/index'

const reducers = combineReducers({
    todos,
    visibilityFilter,
    address
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer