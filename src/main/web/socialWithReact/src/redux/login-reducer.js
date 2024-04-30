import {userAPI} from "../api/api"

let LOGIN = 'LOGIN';

let initialState = {
    token: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN:
            debugger
            return {...state, token: action.token}
        default:
            return state
    }
}

export const setToken = (token) => ({type: LOGIN, token})

export const login = (logAndPass) => (dispatch) => {
    userAPI.login(logAndPass)
        .then(resp => { dispatch(setToken(resp.data.token))})
}
export default loginReducer;