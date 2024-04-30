import React from 'react';
import {connect} from "react-redux";
import {
    followSuccess,
    setTotalElements,
    setCurrentPage,
    setUsers,
    followDelete,
    toggleFetching
} from "../../redux/users-reducer";
import * as axios from "axios";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";
import {getCurrentPage, getIsFetching, getPageSize, getTotalElement, getUser} from "./user-selector";

class UserComponent extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`http://localhost:8080/user?page=${this.props.currentPage}&size=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.content);
                this.props.setTotalElements(response.data.totalElements);
            });
        this.props.toggleFetching(false)
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:8080/user?page=${pageNumber}&size=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.content);
            });
        this.props.toggleFetching(false)
    }

    render(){
        return <div>
            { this.props.isFetching ? <Preloader/> : null }
            <User totalElements={this.props.totalElements}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     userPage={this.props.userPage}
                     follow={this.props.followSuccess}
                     unfollow={this.props.followDelete}
        />
        </div>
    }
}


let mapStateToProps = (state) =>{
    return {
        userPage: getUser(state),
        pageSize: getPageSize(state),
        totalElements: getTotalElement(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
}
// let mapStateToDispatch = (dispatch) => {
//     return {
//         follow: (userId) => {dispatch(followAC(userId))},
//         unfollow: (userId) => {dispatch(unFollowAC(userId))},
//         setUsers: (user) => {dispatch(setUsers(user))},
//         setCurrentPage: (pageId) => {dispatch(setCurrentPageAC(pageId))},
//         setTotalElements: (totalElements) => {dispatch(setTotalElementsAC(totalElements))},
//         toggleFetching: (isFetching) => {dispatch(toggleFetchingAC(isFetching))}
//     }
// }
export default connect(mapStateToProps,
    {followSuccess,followDelete,setUsers,setCurrentPage,setTotalElements,toggleFetching}
    )(UserComponent);