import React from "react";
import dm from "./Dialogs.module.css"
import Message from "./Message/Message";

const Dialogs = (props) => {
    const state = props.dialogReducer;
    let people = state.people.map(p => <Message name={p.name}/>)
    let posts = state.posts.map(p => <Message name={p.message}/>)

    let mess;

    let onSendMessageClick = () => {
        props.sendMessage(mess);
    }
    let onNewMessageChange = (e) => {
        mess = e.target.value;
    }

    return (
        <div className={dm.dialogs}>
            <div className={dm.dialogsItem}>
                {people}
            </div>
            <div className={dm.message}>
                {posts}
                <div>
                    <textarea onChange={onNewMessageChange} placeholder='enter something'/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}> Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;