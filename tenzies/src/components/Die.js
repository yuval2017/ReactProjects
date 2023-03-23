import React from "react";
import '../style.css'

export function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"}
    return (
        //nested elemetns
        <div className="die-face" style = {styles} onClick = {props.onToggle}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}