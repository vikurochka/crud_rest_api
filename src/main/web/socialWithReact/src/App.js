import React from "react";
import './App.css';
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import { Route } from "react-router-dom";
import DialogsComponent from "./component/Dialogs/DialogsComponent";
import UserComponent from "./component/Users/UserComponent";
import ProfileComponents from "./component/Profile/ProfileComponents";
import Login from "./component/Login/Login";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileComponents/>}/>
            <Route path='/dialog' render={() => <DialogsComponent/>}/>
            <Route path='/users' render={() => <UserComponent/>}/>
        </div>
    );
}
export default App;
