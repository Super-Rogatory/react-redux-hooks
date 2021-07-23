import * as types from './actionTypes';

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: types.DEPOSIT_MONEY,
            money: amount
        })
    }
}
export const withdrawlMoney = (amount) => {
    return (dispatch) => {
         dispatch({
            type: types.WITHDRAWL_MONEY,
            money: amount
        })
    }
}