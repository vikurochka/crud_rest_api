import React from "react";
import pm from './Post.module.css'

const Post = (props) => {
    return (
        <div className={pm.item}>
            <img className={pm.forPost}
                 src='https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip'/>
            Hi my name {props.name}
        </div>
)
}
export default Post;