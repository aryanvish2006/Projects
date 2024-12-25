import React, { useEffect } from "react";
import styles from "./Home.module.css"
import darkStyles from "./DarkHome.module.css"
const Home = ({mode}) => {
    useEffect(()=>{
        document.body.style.backgroundColor = mode?"#2d283e":"#3aafa9";
    })
    return(
    <div className={mode?darkStyles.bbody:styles.bbody}>
        <div className={mode?darkStyles.main:styles.main}>
        <div className={mode?darkStyles.container:styles.container}>
            <h2 className={mode?darkStyles.title:styles.title}>Paste URL</h2>
            <div className={mode?darkStyles.content:styles.content}>
                <input className={mode?darkStyles.input:styles.input} type="text" placeholder="Youtube URL"/>
                <button className={mode?darkStyles.goBtn:styles.goBtn}>Go</button>
            </div>
        </div>
        </div>
        <marquee className={mode?darkStyles.notice:styles.notice} behavior="" direction="">We do not host any content. All videos are sourced from YouTube, 
            and users should only download videos they have the right to use. We are not liable for any copyright infrigement.</marquee>
    </div>
    )
}

export default Home