import profileReducer, {
    addPostActionCreator,
    deletePost,
} from './profile-reducer';

let state = {
    postData: [
        { id: 1, message: 'Hi, my friend!', likeCount: '15' },
        { id: 2, message: 'It is my first post', likeCount: '20' },
        { id: 3, message: 'It is my second post', likeCount: '10' },
        { id: 4, message: 'It is my third post', likeCount: '0' },
        { id: 5, message: 'It is my fourth post', likeCount: '5' },
    ],
};

it('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator('hello');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.postData.length).toBe(6);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('hello');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.postData[5].message).toBe('hello');
});

it('after deleting length of message should be decremnt', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(4);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(5);
});
