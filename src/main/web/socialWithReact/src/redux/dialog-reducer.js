let ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    posts: [{id: 1, message: 'jp'}, {id: 2, message: 'dr'}, {id: 3, message: 'er'}],
    people: [{id: 1, name: 'rom'}, {id: 2, name: 'and'}, {id: 3, name: 'iv'}, {id: 4, name: 'an'}, {id: 5, name: 'mam'}],
    newMessage: ""
}
const dialogReducer = (state = initialState, action) => {
    let itemsAtPosts = state.posts.length;
    switch (action.type){
        case ADD_NEW_MESSAGE:
            state.newMessage = action.body;
            return state;
        case SEND_MESSAGE:
            let newPost = {
                id: 1,
                message: action.message
            };
            let stateCopy = {...state,
                posts: [...state.posts]};
            stateCopy.posts.push(newPost);
            return stateCopy;
        default:
            return state;
    }
}

export const updateNewMessage = (body) => ({type: ADD_NEW_MESSAGE, body: body});
export const sendMessage = (message) => ({type: SEND_MESSAGE, message: message});

export default dialogReducer;