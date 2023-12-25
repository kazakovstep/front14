import React, {useState} from "react";
import styles from "./InputRange.module.css"

export const InputRange = ()=>{

    return(
        <>
            <div className={styles.inputBox}>
                <input type={"range"} step={1} id={"inputRange"} className={styles.inputReal}/>
            </div>
        </>
    )
}