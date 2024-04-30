import React, {Component} from "react";
import hm from './Header.module.css'

const Header = () =>{
    return(
        <header className={hm.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg'/>
        </header>
    )
}
export default Header;