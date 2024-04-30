import React, {Component} from "react";
import n from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () =>{
    return(
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' activeClassName={n.active}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialog' activeClassName={n.active}>Dialog</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/users' activeClassName={n.active}>Users</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/login' activeClassName={n.active}>Login</NavLink>
            </div>
        </nav>
    )
}
export default Nav;