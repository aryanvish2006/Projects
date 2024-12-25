import React, { useState } from "react";
import styles from "./Navbar.module.css"
import darkStyles from "./DarkNavbar.module.css"
const Navbar = ({mode, setMode}) => {
    return(
    <div>
        <div className={mode?darkStyles.navbar:styles.navbar}>
            <h1 className={mode?darkStyles.title:styles.title}>GET TUBE</h1>
            <div onClick={()=>{setMode(!mode)}} className={`${mode?darkStyles.mode:styles.mode} ${mode?styles.on:styles.off}`}>
                <div className={mode?darkStyles.circle:styles.circle}></div>
                </div>
        </div>
    </div>
    )
}

export default Navbar