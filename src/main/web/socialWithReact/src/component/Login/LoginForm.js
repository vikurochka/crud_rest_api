import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../util/validation/validation";
import {Input} from "../common/FormControl/FormControl";
import style from '../common/FormControl/FormControl.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}
                       validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                       validate={[required]} component={Input}/>
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'login'})(LoginForm);