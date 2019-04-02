import ajax from '@fdaciuk/ajax'
import { SUCCESS, FETCHING } from "./actions";

export const fetchAddress = (cep) => async (dispatch, getState) => {
    dispatch({type:FETCHING})
    const response = await ajax().get(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${cep}`)        
    dispatch(updateAddress(response))
    dispatch({
        type:SUCCESS,
        payload:response
    })
}

export const updateAddress = (data) => ({
    type: SUCCESS,
    payload: data
})