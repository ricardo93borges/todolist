import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos, { initialState } from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

describe('Todo reducer tests', () => {

    it('should todo be a function', () => {
        expect(todos).to.be.a('function')
    })

    it('should add a todo item', () => {
        const before = deepFreeze([])
        const action = {
            type: ADD_TODO,
            payload: {id:0, text:'Hey'}
        }
        const after = [{id:0,text:'Hey', completed:false}]
        expect(todos(before, action)).to.be.deep.equal(after)
    })

    it('should add a new item', () => {
        const before = deepFreeze([
            {id:0,text:'Hey', completed:false}
        ])

        const action = {
            type: ADD_TODO,
            payload: {id:1, text:'Ho'}
        }

        const after = [
            {id:0,text:'Hey', completed:false},
            {id:1,text:'Ho', completed:false}
        ]

        expect(todos(before, action)).to.be.deep.equal(after)
    })

    it('should toggle first todo', () => {
        const before = deepFreeze([
            {id:0,text:'Hey', completed:false},
            {id:1,text:'Ho', completed:false}
        ])

        const action = {
            type: TOGGLE_TODO,
            payload: {id:0}
        }

        const after = [
            {id:0,text:'Hey', completed:true},
            {id:1,text:'Ho', completed:false}
        ]

        expect(todos(before, action)).to.be.deep.equal(after)
    })

    it('should return latest state when action is unknown', () => {
        const before = deepFreeze([{id:0,text:'Hey', completed:false}])
        const action = {
            type: 'UNKNOWN',
            payload: {id:0, text:'Hey'}
        }
        const after = deepFreeze([{id:0,text:'Hey', completed:false}])
        expect(todos(before, action)).to.be.deep.equal(after)
    })

    it('should return inital state when state before is undefined', () => {
        const before = undefined
        const action = {type: 'UNKNOWN'}
        const after = initialState
        expect(todos(before, action)).to.be.deep.equal(after)
    })

})    