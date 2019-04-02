import { SUCCESS, FETCHING } from "./actions";
import createReducer from '../create-reducer'

export const initialState = {
    address:'',
    city:'',
    code:'',
    district:'',
    state:'',
    status:1,
    isFetching: false
}

const address = createReducer(initialState, {
    [SUCCESS]: (state, action) => ({...action.payload, isFetching:false}),
    [FETCHING]: (state, action) => ({...state, isFetching:true})
})

export default address