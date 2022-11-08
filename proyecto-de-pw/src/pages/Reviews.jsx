
import Req20 from "./Req20"
import Req21 from "./Req21"
import React from "react";
//import Req19 from "./Req19"
//import {Link} from "react-router-dom";
import "../estilos/estilosReq.css"

const Reviews= () =>{
    return <div className="w-auto bg-white mt-0">
        <div>
            <Req20/>
        </div>    
        <div className="bg-dark w-auto">
            <Req21/>
        </div>  
       
        </div>
}
/* <div>
            <Link to={"/Req19"}>
            <p>a</p>
            </Link>
        </div>*/ 
export default Reviews;