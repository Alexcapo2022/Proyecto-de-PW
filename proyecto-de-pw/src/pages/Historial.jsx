
import React from "react";
const orderHistory=(actualizar)=>{
    
    if(localStorage.getItem("orderHistory")!=null){
    const history = JSON.parse(localStorage.getItem("orderHistory"));
    const order=Array(history.length).fill(0).map((_,index)=>{
        return<div id="historyCard">
        <div className="inline">
            <img src={history[index].img} alt=""/>
            <p style={{width:"100%"}}>{history[index].name}</p>
            <p><b>${history[index].price}</b></p>
        </div>
        </div>
    });
    return <div>
        {order}
    </div>;
    }else{
        return <h1 style={{width:"100%",height:"100%",textAlign:"center"}} className="mt-5"><b>No items have been bought!</b></h1>
    }
    
}

export default orderHistory;
