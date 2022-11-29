import React from "react";
import '../estilos/ArmadoAvanzado.css'



import BComponentCol from "../pages/BComponentCol";
import { allItems, gamingComponents, designComponents,
    codingComponentes, officeComponents, renderingComponents, otherComponents,
    possibleCheckoutItems} from "../components/models/dataScript";

let totalPrice=0;
let selected=Number(localStorage.getItem("selection"));
let orderNum=0;

const calculateOption=(props)=>{
    console.log(selected);
    switch(selected){
        case 1:
            return gamingComponents;
        case 2:
            return designComponents;
        case 3:
            return codingComponentes;
        case 4:
            return renderingComponents;
        case 6:
            return otherComponents;
        case 5:
            return officeComponents;
        default:
    }
}

const calculateTotalPrice=(props)=>{
    let selectionArray = calculateOption();
    for(let i=0;i<7;i++){
        totalPrice+=allItems[i][selectionArray[i]].price;
    }
    return <span>
        {totalPrice}
    </span>
}

const printItems=(props)=>{
    possibleCheckoutItems.length=0;
    let selectionArray = calculateOption();
    for(let i=0;i<7;i++){
        let item={};
        item.name=allItems[i][selectionArray[i]].name;
        item.price=allItems[i][selectionArray[i]].price;
        item.img=allItems[i][selectionArray[i]].img;
        item.order=orderNum;
        possibleCheckoutItems.push(item);
    console.log(`item:${allItems[i][selectionArray[i]].img}`)
    console.log(`item:${allItems[i][selectionArray[i]].name}`);
    console.log(`item:${allItems[i][selectionArray[i]].price}`);
    orderNum++;
    }
    console.log(possibleCheckoutItems);
    
    const Items= Array(7).fill(0).map((_,index)=>{
    
    return <BComponentCol
        img={allItems[index][selectionArray[index]].img}
        name={allItems[index][selectionArray[index]].name}
        price={allItems[index][selectionArray[index]].price}
        key={`${index}`}/>
    })
    let itemIndex=0;
    const ItemsRows = Array(3).fill(0).map((_,index)=>{
        itemIndex=index*2;
        return <div className="row" id="mobile-brecommend-items">
            {Items[itemIndex]}
            {Items[itemIndex+1]}
            </div>
    })
    return <div>
        {ItemsRows}
        <div className="row" id="mobile-brecommend-items">
            {Items[6]}
            <div className="col"></div>
        </div>
    </div>
}



const BeginnerRecommendation =()=>{
    return <div id="content-margin">
    <div className="inline" id="mobile-brecommend-nav">
    <h1 style={{width:"70%"}}>You optimized your build!</h1>
    
        <a href="/ArmadoPrincipiantes" id="mobile-boptions-nav-b1" >
            <button className="botonAA_2" >  Back </button></a>
          <a id="nextButton" href="/Carrito">
              <button className="botonAA1"  onClick={
                ()=>{localStorage.setItem("possibleCheckoutItems",JSON.stringify(possibleCheckoutItems))}
                }>Checkout </button></a>
    </div>
    <div className="row" id="content-beginner-recommendation-grid-row">
        <div className="col-5" id="mobile-brecommend-col1">
            <img src="/images/pc.png" alt="" style={{width: "90%",marginLeft: "-40px"}}/>
            <div style={{backgroundColor:"#4AB4DD", padding: "20px",borderRadius: "20px",width:"90%"}} >
            <div className="row" style={{textAlign:"center"}} >
                <div className="col">Components price</div>
                <div className="col">Build fee</div>
            </div>
            <div className="row" style={{textAlign:"center"}}>
                <div className="col" id="beginner-components-price"><b>${calculateTotalPrice()}</b></div>
                <div className="col"><b>$99</b></div>
            </div>
            </div>
        </div>
        <div className="col-7" id="mobile-brecommend-col2">
            <h2 style={{marginBottom:"50px"}}>Components</h2>
            <div id="beginner-components-grid" style={{backgroundColor:"rgba(0, 0, 0, 0.2)",padding: "50px",borderRadius:"50px", width: "70%"}}>
                
                {printItems()}
            </div>
            
        </div>
    </div>
</div>

}
export default BeginnerRecommendation;