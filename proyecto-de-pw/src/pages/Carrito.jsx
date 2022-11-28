import React from "react";

import { useState } from "react";
import tacho from '../imagenes/icons/basura.png'


const Carrito =()=>{
    const [click,setClick]=useState(false);
    
    let possibleCheckoutItems;
    if(localStorage.getItem("possibleCheckoutItems")!=null){
        possibleCheckoutItems=JSON.parse(localStorage.getItem("possibleCheckoutItems"));
    }else{
        possibleCheckoutItems={}
    }

    const getPrice=()=>{
        let totalPrice=0;
        if(possibleCheckoutItems.length>0){
        for(let i=0;i<possibleCheckoutItems.length;i++){
            totalPrice+=possibleCheckoutItems[i].price;
        }}
        return <span>{totalPrice}</span>;
    }

    const possibleCheckoutCard = (name,price,img,order)=>{
        return <div className="content-advanced-buyCard">
            <img src={img} alt=""/>
            <div className="content-advanced-buyCard-text">
                <p><b>{name}</b></p>
                <p className="content-advanced-buyCard-text-price">${price}</p>
            </div>
            <button className="content-advanced-buyCard-addButton" onClick={()=>{
                for(let i=0;i<possibleCheckoutItems.length;i++){
                    if(possibleCheckoutItems[i].order===order){                    
                    possibleCheckoutItems.splice(i,1);
                    setClick(true);
                    localStorage.setItem("possibleCheckoutItems",JSON.stringify(possibleCheckoutItems));
                    setTimeout(()=>{setClick(false)},10);
                    }
                }
                console.log(possibleCheckoutItems);
            }}><img src={tacho} alt="img" style={{width:"30px",marginRight: "2px"}}/></button>
            </div>
    }
    const showPossibleCheckout = (click)=>{
        console.log(possibleCheckoutItems);
        if(possibleCheckoutItems.length>0){
        const checkout=Array(possibleCheckoutItems.length).fill(0).map((_,index)=>{
            return possibleCheckoutCard(possibleCheckoutItems[index].name,possibleCheckoutItems[index].price,possibleCheckoutItems[index].img,possibleCheckoutItems[index].order);
        })
        return checkout;
        }
        else{
            return <h1 style={{textAlign:"center"}} id="mobile-precheckout-noitems">No more items</h1>;
        }
    }

    return <div id="content-margin" style={{width: "90%"}}>
        <div className="inline" id="mobile-brecommend-nav">
            <h1 style={{width: "50%"}}>Shopping cart items</h1>
            
            <div style={{width: "100%"}}></div>
            <a href="/ArmadoAvanzado" id="mobile-boptions-nav-b1">
                <button className="botonAA_2" >  Back </button></a>
                <a  href={possibleCheckoutItems.length>0 ? "/Compra":"href=/#"} id="next">
                    <button className="botonAA1" >Checkout </button></a>
        </div>
            <div className="col" id="mobile-cart">
                <div style={{width:"290%",marginTop: "160px"}}>
                <div style={{marginRight:"-350px",marginLeft:"auto",width:"30%",backgroundColor:"rgba(0, 0, 0, 0.5)",textAlign:"center",borderTopRightRadius:"10px",borderTopLeftRadius:"10px",padding:"10px"}} id="mobile-cart-pad"><b>${getPrice()}</b></div>
                <div id="list-checkout" style={{width:"90%",marginLeft:"700px",marginRight:"50px",backgroundColor:"rgba(0, 0, 0, 0.5)",padding: "10px",borderRadius:"10px"}} >
                {showPossibleCheckout(click)}
                </div>
                
                </div>
            </div>
        </div>
}
export default Carrito;