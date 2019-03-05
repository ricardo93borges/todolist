import visibilityFilter, { initialState } from './index'
import { expect } from 'chai'
import { SHOW_COMPLETED, SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_ACTIVE } from './actions';


describe('visibilityFilter reducer tests', () => {

    it('should show all todos', () => {
        const before = SHOW_COMPLETED
        const action = {
            type: SET_VISIBILITY_FILTER,
            payload: {filter: SHOW_ALL}
        }
        const after = SHOW_ALL
        expect(visibilityFilter(before, action)).to.be.equal(after)
    })
    
    it('should show just completed todos', () => {
        const before = SHOW_ALL
        const action = {
            type: SET_VISIBILITY_FILTER,
            payload: {filter: SHOW_COMPLETED}
        }
        const after = SHOW_COMPLETED
        expect(visibilityFilter(before, action)).to.be.equal(after)
    })
    
    it('should show just active todos', () => {
        const before = SHOW_ALL
        const action = {
            type: SET_VISIBILITY_FILTER,
            payload: {filter: SHOW_ACTIVE}
        }
        const after = SHOW_ACTIVE
        expect(visibilityFilter(before, action)).to.be.equal(after)
    })
})