import React from 'react';
import st from "./User.module.css";
import {NavLink} from "react-router-dom";


const User = (props) => {

    let pagesCount = Math.ceil(props.totalElements / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && st.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                })}
            </div>
            <div className={st.mainStyle}>
                {props.userPage.map(u =>
                    <div key={u.id}>
                        <div>
                            <NavLink to={`/profile/${u.id}`} >
                                <img className={st.userPhoto} src={u.photo}/>
                            </NavLink>
                        </div>
                        {u.follow
                            ? <button onClick={e => { props.follow(u.id)}}>Follow</button>
                            : <button onClick={e => { props.unfollow(u.id)}}>Unfollow</button>
                        }
                        <span>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.phone}</div>
                                </div>
                            </span>
                    </div>)}
            </div>
        </div>
    )
}


export default User;