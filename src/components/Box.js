import React from "react";

//any other imports


function Box(props){

    let style = {
        backgroundColor: props.color,
        minHeight: "50px",
        width: "50px"
    }

    return(
        <div>
            <p style={{...style}}>{props.number}</p>
        </div>
    )
}

export default Box;