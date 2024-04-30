import {userAPI} from '../api/api'

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_ELEMENTS = 'SET_TOTAL_ELEMENTS';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 4,
    totalElements: 0,
    currentPage: 0,
    isFetching: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: true}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_ELEMENTS:
            return {...state, totalElements: action.totalElements}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalElements = (totalElements) => ({type: SET_TOTAL_ELEMENTS, totalElements})
export const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const followSuccess = (userId) => (dispatch) => {
    userAPI.follow(userId)
        .then(resp => { dispatch(follow(userId)) })
}
export const followDelete = (userId) => (dispatch) => {
    userAPI.unFollow(userId)
        .then(resp => { dispatch(unFollow(userId)) })
}

export default userReducer;