import React, {useEffect}from 'react';
import {withRouter} from "react-router";
import {addPost, getUserProfile, setUserPhoto} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";

const ProfileComponents = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId
        if(!userId)
            userId = 1
        props.getUserProfile(userId)},[])


    return (
        <Profile {...props} photo = {props.profile}/>
    )
}
let withUrlDataContainerComponent = withRouter(ProfileComponents)

let mapStateToProps = (state) => ({
    profile : state.profilePage.profile,
    posts : state.profilePage.posts
})

export default connect(mapStateToProps,
    {addPost,setUserPhoto, getUserProfile})(withUrlDataContainerComponent)