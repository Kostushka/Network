let rerenderEntireTree = () => {};


let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, my friend!', likeCount: '15'},
            {id: 2, message: 'It is my first post', likeCount: '20'},
            {id: 3, message: 'It is my second post', likeCount: '10'},
            {id: 4, message: 'It is my third post', likeCount: '0'},
            {id: 5, message: 'It is my fourth post', likeCount: '5'}
        ],
        newPostText: ''
    },
    dialogsPage: {
        nameData: [
            {id: 1, name: 'Nastya'},
            {id: 2, name: 'Tanya'},
            {id: 3, name: 'Masha'},
            {id: 4, name: 'Andrey'},
            {id: 5, name: 'Sveta'},
            {id: 6, name: 'Lena'},
        ],
        messageData: [
            {id: 1, message: 'Hi! How are you?'},
            {id: 2, message: 'Hello. I am fine. And you?'},
            {id: 3, message: 'I am eating ice cream!:) Mmmm...'},
            {id: 4, message: 'Good!'},
            {id: 5, message: 'Yes!'}
        ],
        newMessageText: '',
        imgData: [
            {id:1, img: 'https://yt3.ggpht.com/a/AATXAJxK_mYx8XR2ySdDqO_DNrKKg0FGnlCq0Nj1t89Mmw=s900-c-k-c0xffffffff-no-rj-mo'},
            {id:2, img: 'https://im0-tub-ua.yandex.net/i?id=a4e263cd4ef749c5da5512138af270ae&n=13'},
            {id:3, img: 'https://w7.pngwing.com/pngs/789/888/png-transparent-computer-icons-login-person-user-avatar-log-smiley-desktop-wallpaper-sign.png'},
            {id:4, img: 'https://e7.pngegg.com/pngimages/53/105/png-clipart-student-school-computer-icons-student-text-people.png'},
            {id:5, img: 'https://e7.pngegg.com/pngimages/358/473/png-clipart-computer-icons-user-profile-person-child-heroes.png'},
            {id:6, img: 'https://w7.pngwing.com/pngs/559/14/png-transparent-computer-icons-user-personage-heroes-desktop-wallpaper-line.png'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Masha'},
        ]
    }
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: '0'
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messageData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

// export default state;
