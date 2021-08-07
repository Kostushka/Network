import { profileAPI } from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';

let initialState = {
    postData: [
        { id: 1, message: 'Hi, my friend!', likeCount: '15' },
        { id: 2, message: 'It is my first post', likeCount: '20' },
        { id: 3, message: 'It is my second post', likeCount: '10' },
        { id: 4, message: 'It is my third post', likeCount: '0' },
        { id: 5, message: 'It is my fourth post', likeCount: '5' },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: '0',
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case DELETE_POST:
            return {
                ...state,
                postData: [
                    ...state.postData.filter((p) => p.id != action.postId),
                ],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText,
    };
};
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId,
    };
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    };
};

export const profileData = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileData(userId);

        dispatch(setUserProfile(response.data));
    };
};
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);

        dispatch(setStatus(response.data));
    };
};
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    };
};

export default profileReducer;
