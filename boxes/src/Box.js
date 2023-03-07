import React from "react";


export default function Box(props){
    const styles = {
        backgroundColor: props.on ? "#222222":"transparent"
    }
    return(
        //this is goes to styles.backgroundColor
        <div 
            style={styles} 
            className='box' 
            onClick={props.toggle}
        >  
        </div>
    )
}
