import * as types from '../actions/actionTypes';

const initialState = 0;

const accountReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.DEPOSIT_MONEY:
            return state + action.money;
        case types.WITHDRAWL_MONEY:
            return state - action.money;
        default:
            return state;
    }
}
export default accountReducer;