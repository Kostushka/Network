const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, my friend!', likeCount: '15'},
        {id: 2, message: 'It is my first post', likeCount: '20'},
        {id: 3, message: 'It is my second post', likeCount: '10'},
        {id: 4, message: 'It is my third post', likeCount: '0'},
        {id: 5, message: 'It is my fourth post', likeCount: '5'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: '0'
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;