import React from "react";
import '../style.css'

export function Die(props){
    return (
        //nested elemetns
        <div className="die-face">
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}