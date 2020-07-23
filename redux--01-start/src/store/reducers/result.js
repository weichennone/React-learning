import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case 'INCREMENT':
    //         return {
    //             counter: state.counter + 1
    //         }
    //     case 'DECREMENT':
    //         return {
    //             counter: state.counter - 1
    //         }

    // }
    if (action.type == 'STORE_RESULT') {
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: action.result})
        }
    }
    if (action.type == 'DEL_RESULT') {
        const updatedArray = state.results.filter(result => result.id !== action.resultID);
        return {
            ...state,
            results: updatedArray
        }
    }
    return state;
};

export default reducer;