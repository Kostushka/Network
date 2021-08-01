const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
    imgData: [
        {
            id: 1,
            img: 'https://yt3.ggpht.com/a/AATXAJxK_mYx8XR2ySdDqO_DNrKKg0FGnlCq0Nj1t89Mmw=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {id: 2, img: 'https://im0-tub-ua.yandex.net/i?id=a4e263cd4ef749c5da5512138af270ae&n=13'},
        {
            id: 3,
            img: 'https://w7.pngwing.com/pngs/789/888/png-transparent-computer-icons-login-person-user-avatar-log-smiley-desktop-wallpaper-sign.png'
        },
        {
            id: 4,
            img: 'https://e7.pngegg.com/pngimages/53/105/png-clipart-student-school-computer-icons-student-text-people.png'
        },
        {
            id: 5,
            img: 'https://e7.pngegg.com/pngimages/358/473/png-clipart-computer-icons-user-profile-person-child-heroes.png'
        },
        {
            id: 6,
            img: 'https://w7.pngwing.com/pngs/559/14/png-transparent-computer-icons-user-personage-heroes-desktop-wallpaper-line.png'
        }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: action.newMessageText
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
};

export default dialogsReducer;