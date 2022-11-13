import React from "react";




const BComponentCol = (props)=>{
    return <div id="content-beginner-recommendation-components-col" className="col">
        <img src={props.img} alt=""/>
        <p>{props.name}</p>
        <b>${props.price}</b>
    </div>
}
export default BComponentCol;