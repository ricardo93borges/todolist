import { UPDATE_ADDRESS } from "./actions";

export const updateAddress = (address) => ({
    type: UPDATE_ADDRESS,
    payload: address
})