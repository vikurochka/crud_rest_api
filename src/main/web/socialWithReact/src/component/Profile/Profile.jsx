import React, {Component} from "react";
import pm from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    return(
        <div className={pm.content}>
            <ProfileInfo profilePhoto={props.photo}/>
            <MyPost/>
        </div>
    )
}
export default Profile;