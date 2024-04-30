import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {updateNewMessage, sendMessage} from './../../redux/dialog-reducer'

let mapStateToProps = (state) => {
    return {
        dialogReducer: state.dialogReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (body) => {dispatch(updateNewMessage(body))},
        sendMessage: (message) => {dispatch(sendMessage(message))}
    }
}

const DialogsComponent = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsComponent;