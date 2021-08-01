import {authData} from "./auth-reducer";


const INITIALISE_SUCCESS = 'SET-USER-DATA';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALISE_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializeSuccess = () => {
    return {
        type: INITIALISE_SUCCESS,

    }
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializeSuccess());
        })
};


export default appReducer;