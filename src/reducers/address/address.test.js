import { expect } from 'chai'
import address, { initialState } from './index'
import { SUCCESS, FETCHING } from "./actions";

describe('Address reducer tests', () => {

    const newAddress = {
        address:'new address',
        city:'new city',
        code:'new code',
        district:'new district',
        state:'new state',
        status:1,
        isFetching:false
    }

    it('should action SUCCESS update address', () => {
        const before = initialState

        const action = {
            type: SUCCESS,
            payload: newAddress
        }
        
        const after = newAddress
        
        expect(address(before, action)).to.be.deep.equal(after)
    })


})    