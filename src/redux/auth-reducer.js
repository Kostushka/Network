import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_SUCCESS = 'auth/GET-CAPTCHA-SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_SUCCESS:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
            isAuth,
        },
    };
};
export const getCaptchaSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_SUCCESS,
        data: {
            captchaUrl,
        },
    };
};

export const authData = () => async (dispatch) => {
    let response = await authAPI.getAuthData();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login =
    (email, password, rememberMe, captcha) => async (dispatch) => {
        let response = await authAPI.login(
            email,
            password,
            rememberMe,
            captcha
        );

        if (response.data.resultCode === 0) {
            dispatch(authData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaURL());
            }
            let message =
                response.data.messages.length > 0
                    ? response.data.messages[0]
                    : 'Some error';
            dispatch(stopSubmit('login', { _error: message }));
        }
    };
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};
export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaSuccess(captchaUrl));
};

export default authReducer;
