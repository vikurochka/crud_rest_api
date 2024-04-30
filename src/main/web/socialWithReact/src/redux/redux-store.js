import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dialogReducer from "./dialog-reducer";
import thunk from 'redux-thunk';
import userReducer from './users-reducer';
import profileReducer from "./profile-reducer";
import { reducer as formReducer } from 'redux-form'
import loginReducer from "./login-reducer";

let reducer = combineReducers({
    dialogReducer: dialogReducer,
    userPage: userReducer,
    profilePage: profileReducer,
    login: loginReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;