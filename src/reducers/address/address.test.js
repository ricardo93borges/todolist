import { expect } from 'chai'
import address, { initialState } from './index'
import { UPDATE_ADDRESS } from './actions'

describe('Address reducer tests', () => {

    const newAddress = {
        address:'new address',
        city:'new city',
        code:'new code',
        district:'new district',
        state:'new state',
        status:1
    }

    it('should todo be a function', () => {
        expect(address).to.be.a('function')
    })

    it('should action UPDATE_ADDRESS update address', () => {
        const before = initialState

        const action = {
            type: UPDATE_ADDRESS,
            payload: newAddress
        }
        
        const after = newAddress
        
        expect(address(before, action)).to.be.deep.equal(after)
    })


})    