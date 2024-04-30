import {userAPI} from "../api/api";

let ADD_POST = 'ADD_POST';
let SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {
    posts: [],
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newText,
                likesCount: 0
            }
            return { ...state, posts: [...state.posts, newPost]}
        case SET_USER_PHOTO:
            return {...state, profile: action.pathToPhoto }
        default:
            return state
    }
}
export const addPost = (newText) => ({type: ADD_POST, newText})
export const setUserPhoto = (pathToPhoto) => ({type: SET_USER_PHOTO, pathToPhoto})
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getUserById(userId).
        then(resp => {dispatch(setUserPhoto(resp.data.photo))})
}
export default profileReducer;