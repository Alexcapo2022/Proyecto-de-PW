import React from "react";
import { useState } from "react";



const Compra = ()=>{
    const [star,setStar]=useState(0);
    const [done,setDone]=useState(false);
    let possibleCheckoutItems;
    if(localStorage.getItem("possibleCheckoutItems")!=null){
      possibleCheckoutItems=JSON.parse(localStorage.getItem("possibleCheckoutItems"));
    }else{
      possibleCheckoutItems={};
    }
    const getPrice=()=>{
      let totalPrice=0;
      if(possibleCheckoutItems.length>0){
      for(let i=0;i<possibleCheckoutItems.length;i++){
          totalPrice+=possibleCheckoutItems[i].price;
      }}
      return <span>{totalPrice}</span>;
  }
    const CheckoutCard = (name,price,img)=>{
    return <div className="content-advanced-buyCard" style={{backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white"}}>
        <img src={img} alt=""/>
        <div className="content-advanced-buyCard-text">
        <p><b>{name}</b></p>
        <p className="content-advanced-buyCard-text-price">${price}</p>
        </div>
        </div>
    }
    const showCheckout = (click)=>{
        console.log(possibleCheckoutItems);
        if(possibleCheckoutItems.length>0){
        const checkout=Array(possibleCheckoutItems.length).fill(0).map((_,index)=>{
            return CheckoutCard(possibleCheckoutItems[index].name,possibleCheckoutItems[index].price,possibleCheckoutItems[index].img,possibleCheckoutItems[index].order);
        })
        return checkout;
        }else{
          return <p>No items have been bought!</p>
        }
    }
    const deleteItems = ()=>{
      localStorage.removeItem("possibleCheckoutItems");
    }
  const thankCard = () =>{
    if(possibleCheckoutItems.length>0){
    return <div id="thankCard" style={{display:done===true?"flex":"none"}}>
      <h1>Thanks for your order!</h1>
      <img src="http://localhost:4444/imagenes/gracias.gif" alt=""/>
      <div className="inline">
        <h2>Rate us</h2>
        <button onClick={()=>{setStar(1)}}><img src={star>=1?"/icons/star-filled.png":"/icons/star-unfilled.png"} id="thankCardstar" alt=""/></button>
        <button onClick={()=>{setStar(2)}}><img src={star>=2?"/icons/star-filled.png":"/icons/star-unfilled.png"}  id="thankCardstar" alt=""/></button>
        <button onClick={()=>{setStar(3)}}><img src={star>=3?"/icons/star-filled.png":"/icons/star-unfilled.png"}  id="thankCardstar" alt=""/></button>
        <button onClick={()=>{setStar(4)}}><img src={star>=4?"/icons/star-filled.png":"/icons/star-unfilled.png"}  id="thankCardstar" alt=""/></button>
        <button onClick={()=>{setStar(5)}}><img src={star>=5?"/icons/star-filled.png":"/icons/star-unfilled.png"}  id="thankCardstar" alt="" /></button>

                
        <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="depart">Puntaje</label>
              <input type="text" className="bg-lighdt form-control" placeholder=""   onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="depart">comentario</label>
              <input type="text" className="bg-lighdt form-control" placeholder=""  onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="depart">Video</label>
              <input type="text" className="bg-lighdt form-control" placeholder=""   onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="depart">Link</label>
              <input type="text" className="bg-lighdt form-control" placeholder=""  onChange={(e) => setDepartment(e.target.value)} />
        </div>
        
   
      </div>
      <a href="/PaginaPrincipal"><button id="thankCardbutton" onClick={()=>{deleteItems()}}>Submit</button></a>
    </div>
    }
  }
  const saveHistory = () =>{
    
    if(possibleCheckoutItems.length>0){
      if (localStorage.getItem("orderHistory")!=null){
        console.log("entre1");
      let temp=JSON.parse(localStorage.getItem("orderHistory"));
      let totalTemp = temp.concat(possibleCheckoutItems);
      localStorage.setItem("orderHistory",JSON.stringify(totalTemp));
      console.log(JSON.parse(localStorage.getItem("orderHistory")));
      
      }
      else{
        console.log("entre");
        let totalTemp = possibleCheckoutItems;
        localStorage.setItem("orderHistory",JSON.stringify(totalTemp));
        console.log(JSON.parse(localStorage.getItem("orderHistory")));
      }

    }
  }
  
  return <div id="content-margin" style={{ width: "90%" }}>

    <div className="inline" style={{ marginBottom: "40px" }} id="mobile-brecommend-nav">
      <h1 style={{ width: "50%" }}>Checkout</h1>

      <div style={{ width: "100%" }}></div>
      <a href="/Carrito" style={{ width: "15%", backgroundColor: "white", textAlign: "center", borderRadius: "10px", padding: "10px", marginRight: "20px" }} id="mobile-boptions-nav-b1">
        <button className="botonAA_2" >  Back </button></a>
      <a id="next" href="/#" >
        <button className="botonAA1" onClick={() => { setDone(true); saveHistory(); }}>Checkout </button></a>
    </div>
    <div className="row">
      <div id="mobile-brecommend-col3" className="col" style={{ padding: "0px" }}>
        <div id="mobile-checkout" style={{ backgroundColor: "#C8F0EA", borderRadius: "25px", padding: "20px", color: "black" }}>
          <p style={{ fontWeight: "600", marginBottom: "15px" }}><span style={{ color: "#4AB4DD" }}>Cart</span> | Information | Shipping | Payment</p>
          <fieldset className="border rounded-3 p-3 float-none w-auto px-3" legend>
            <legend className="float-none" style={{ width: "auto", textAlign: "center" }}>Express Checkout</legend>
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
              <div className="col" ><button className="btn btn-default" style={{ backgroundColor: "#f3e5f5", borderRadius: "10px" }}><img src="icons/shop_pay-logo.png"  alt="" className="rounded" style={{ width: "90%" }} /></button></div>
              <div className="col" ><button className="btn btn-default" style={{ backgroundColor: "#ffd54f", borderRadius: "10px" }}><img src="icons/paypal-logo.png" alt=""  className="rounded" style={{ width: "90%" }} /></button></div>
              <div className="col" ><button className="btn btn-default" style={{ backgroundColor: "black", borderRadius: "10px" }}><img src="icons/google_pay-logo.png" alt=""  className="rounded" style={{ width: "90%" }} /></button></div>
            </div>
          </fieldset>
          <div id="or"><span style={{ color: "gray", backgroundColor: "white", padding: "10px" }}>OR</span></div>
          <div className="checkout-titles">Contact Information</div>
          <div className="row-1" style={{ display: "flex", marginBottom: "15px" }}>
            <div id ="user-img" className="col-0.5 rounded"><img src="icons/user1.png" alt="" style={{width:"40px"}}></img></div>
            <div className="col" style={{ display: "flex", flexDirection: "column", paddingLeft: "15px" }}>
              <div>Ed Va (edjahevs@gmail.com)</div>
              <div style={{color: "orchid"}}>Log out</div>
            </div>
          </div>
          <div><input id="input-checkbox" type="checkbox" />Email me with news and offers</div>
          <div className="checkout-titles">Shipping Address</div>

          <div className="col-check">
            <div style={{ paddingLeft: "5px", color: "gray" }}>Saved addresses</div>
            <select name="saved-address" style={{ width: "100%", border: "none", outline: "none" }}>
              <option value="United States (person)">United States (Ed Va)</option>
              <option value="China (person)">China (Ed Va)</option>
              <option value="Russia (person)">Russia (Ed Va)</option>
              <option value="Peru (person)">Perú (Ed Va)</option>
            </select>
          </div>

          <div className="col-check">
            <div style={{ paddingLeft: "5px", color: "gray" }}>Country/Region</div>
            <select name="country-region" style={{ width: "100%", border: "none", outline: "none" }}>
              <option value="United States">United States</option>
              <option value="China">China</option>
              <option value="Russia">Russia</option>
              <option value="Peru">Perú</option>
            </select>
          </div>

          <div className="row">
            <div id="col-checkout" className="col">
              <div style={{ paddingLeft: "5px", color: "gray" }}>First Name</div>
              <input type="text" style={{ paddingLeft: "5px", width: "100%", border: "none", outline: "none" }} placeholder="Name" />
            </div>
            <div id="col-checkout" className="col">
              <div style={{ paddingLeft: "5px", color: "gray" }}>Last Name</div>
              <input type="text" style={{ paddingLeft: "5px", width: "100%", border: "none", outline: "none" }} placeholder="Name" />
            </div>
          </div>
          <div className="col-check" style={{ padding: "10px" }}>
            <input type="text" style={{ paddingLeft: "5px", width: "100%", border: "none", outline: "none" }} placeholder="Company (optional)" />
          </div>

          <div className="col-check" style={{ padding: "10px" }}>
            <input type="text" style={{ paddingLeft: "5px", width: "100%", border: "none", outline: "none" }} placeholder="Address" />
          </div>

          <div className="col-check" style={{ padding: "10px" }}>
            <input type="text" style={{ paddingLeft: "5px", width: "100%", border: "none", outline: "none" }} placeholder="Apartment, suite, etc. (optional)" />
          </div>

          <div className="row">
            <div id="col-checkout" className="col">
              <input type="text" style={{ padding: "5px", width: "100%", border: "none", outline: "none" }} placeholder="City" />
            </div>
            <div id="col-checkout" className="col">
              <div style={{ paddingLeft: "5px", color: "gray" }}>State</div>
              <select name="state" style={{ width: "100%", border: "none", outline: "none" }}>
                <option value="none">State</option>
                <option value="st1">Virginia</option>
                <option value="st2">Ohio</option>
                <option value="st3">New York</option>
              </select>
            </div>
            <div id="col-checkout" className="col" style={{ padding: "10px" }}>
              <input type="text" style={{ padding: "5px", width: "100%", border: "none", outline: "none" }} placeholder="ZIP Code" />
            </div>
          </div>

          <div className="col-check" style={{ padding: "10px" }}>
            <input type="text" style={{ paddingLeft: "5px", width: "100%", border: "none", outline: "none" }} placeholder="Phone" />
          </div>

          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "50px", marginBottom: "15px" }}>
            <button className="returnA" style={{ color: "#4AB4DD" }}>  Return to cart</button>
            <button style={{ backgroundColor: "#4AB4DD", color: "white", padding: "10px", borderRadius: "10px" }} onClick={() => { setDone(true); saveHistory(); }}>Continue to shipping</button>
          </div>

        </div>
        {thankCard()}
      </div>

      <div className="col" id="checkout-cart">
        <div style={{ marginTop: "50px" }}>
          <div style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", backgroundColor: "#4AB4DD", width: "50%", marginLeft: "auto", marginRight: "auto", textAlign: "center", padding: "20px" }}>Price: <b id="price">${getPrice()}</b></div>
          <div id="list-checkout" style={{ width: "80%", marginLeft: "auto", marginRight: "auto", backgroundColor: "#D7D7D7", padding: "20px", borderRadius: "10px" }}>
            {showCheckout()}
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default Compra;