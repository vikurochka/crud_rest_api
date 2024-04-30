import React, {Component} from "react";
import mpm from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
    return (
        <div className={mpm.myPost}>
            my post
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <textarea/>
            <button onClick={() => {alert('jopa')}}> Add Post</button>
        </div>
    )
}
export default MyPost;