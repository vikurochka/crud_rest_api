import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/login-reducer";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}
export default connect(null, {login})(Login);
