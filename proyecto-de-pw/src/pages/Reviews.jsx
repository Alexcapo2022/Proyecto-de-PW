
import Req20 from "./Req20"
import Req21 from "./Req21"
import React from "react";
//import Req19 from "./Req19"
//import {Link} from "react-router-dom";
import "../estilos/estilosReq.css"
import { useState } from "react";
import { useEffect } from "react";
import { RUTA_BACKEND } from '../conf';
const Reviews= () =>{
    const [listadoreviews,SetReviews] = useState([])

    const httpObtenerReviews = async () => {
        const resp = await fetch(`${RUTA_BACKEND}/resena?usuario=2babb094-7f68-45d1-86b3-ad685a6a1b69`)
        const resp2 = await fetch(`${RUTA_BACKEND}/listadoUsuario?usuario=2babb094-7f68-45d1-86b3-ad685a6a1b69`)
        const data = await resp.json()
        const data2 = await resp2.json()
        for (let index = 0; index < data.length; index++) {
            data[index]["Nombre"] = data2[0]["Nombre"];
            
        }
        console.log(data)
        SetReviews(data)
        
    }

    useEffect(() => {
        httpObtenerReviews()
    }, [])

    return <div className="w-auto bg-white mt-0">
        <div>
            <Req20
            reviews={ listadoreviews }/>
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