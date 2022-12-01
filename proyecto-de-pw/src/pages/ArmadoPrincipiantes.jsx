import React from "react";


import '../estilos/armadoPrincipiantes.css';
import gaming from "../imagenes/ArmadoPrincipiantes/gaming.jpg";
import design from "../imagenes/ArmadoPrincipiantes/Design.jpg";
import coding from "../imagenes/ArmadoPrincipiantes/coding.png";
import office from "../imagenes/ArmadoPrincipiantes/office.jpg";
import other from "../imagenes/ArmadoPrincipiantes/Other.jpg";
import rendering from "../imagenes/ArmadoPrincipiantes/rendering.jpg";

const ArmadoPrincipiantes = (props) =>{


  let currentSelection="";
  //let selection=0;
  const [selected, setSelected] = React.useState(0);
  //const [setIsActive] = useState(false);
  
  /*const handleClick = () => {
      // 👇️ toggle
      if(selection===0){
          setIsActive(current => !current);
          selection++;
      }else{

      }
      // 👇️ or set to true
      // setIsActive(true);
    };*/
  
  const onItemSelected=(emoji)=>{
      setSelected(emoji);
      if(props.callback){
        props.callback(emoji);
      }
   };
   /*const Recomendacion = () => {
    const [PC_Armado_ID, setID] = useState("");
    const [Nombre, setName] = useState("");
    const [Descripcion, setDescrip] = useState("");
  
    const httpRecomendacion = async (producto) => {
        const resp = await fetch("http://localhost:4444/PC_armado", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        });
        const data = await resp.json();
        if (data.verify) {
            // Login correcto.
            setID(true)
            window.location.href="http://localhost:3000/ArmadoPrincipantes"; // Redireccion con renderizado
            localStorage.setItem("Producto",producto.PC_Armado_ID)
            
        } else {
            
            console.log("Error")
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(()=>{
          httpRecomendacion()
        },[])

        */
/*
   const [listadoPrincipiante,setListadoPrincipainte] = useState ([])
   const httpObtenerOpciones = async () => {
    const resp = await fetch(`http://localhost:4444/PC_armado`)
    
    const data = await resp.json()
    
    setListadoPrincipainte(data)
    
   }
   
   useEffect (()=>{
    httpObtenerOpciones()
},[])*/

    return(
        <div>
          <div className="inline" style={{paddingBottom: "50px"}} id="mobile-boptions-nav"><h1 style={{width:"70%"}}>What do you need?</h1>
            <a href="/PaginaPrincipal" style={{width:"10%",backgroundColor: "white",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}} id="mobile-boptions-nav-b1">
                <button className="botonAA1" > Back </button></a>
                <a id="startRecommend" style={{width:"10%",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}}  href={ selected!==0 ? "/ArmadoPrincipantes/Recomendacion":"" } onClick={()=>{
                    localStorage.setItem("selection",selected)
                }}>
                    <button className="botonAA_2" >Next </button></a>
        </div>
        <div className="container3">
    <div className="card2" style={{border: selected==="1" ? "3px solid white" : "3px solid transparent"}} onClick={()=>{
                currentSelection="gaming";
                console.log(currentSelection);
                onItemSelected(1);
            }}>
        <img src={gaming} alt="" />
      <h4>Gaming</h4>
      <p>Build the best gaming pc to play all the games</p>
    </div>
    <div className="card2" onClick={()=>{
                currentSelection="design";
                console.log(currentSelection);
                onItemSelected(2);
            }}>
        <img src={{design}} alt="" />
      <h4>Design</h4>
      <p>Build the best pc for your new creations in Photoshop</p>
    </div>
    <div className="card2" onClick={()=>{
                currentSelection="coding";
                console.log(currentSelection);
                onItemSelected(3);
            }}>
    <img src={coding} alt="" />
      <h4>Coding</h4>
      <p>Build the best pc to program code quickly</p>
    </div>
  </div>
  <div className="container3">
    <div className="card2" onClick={()=>{
                currentSelection="rendering";
                console.log(currentSelection);
                onItemSelected(4);
            }}>
    <img src={rendering} alt="" />
      <h4>Rendering</h4>
      <p>Build the best PC for rendering in After Effects</p>
    </div>
    <div className="card2" onClick={()=>{
                currentSelection="office";
                console.log(currentSelection);
                onItemSelected(5);
            }}>
    <img src={office} alt="" />
      <h4>Office</h4>
      <p>Build the best PC for your office economically</p>
    </div>
    <div className="card2" onClick={()=>{
                currentSelection="other";
                console.log(currentSelection);
                onItemSelected(6);
            }}>
        <img src={(other)} alt="" /> 
      <h4>Other</h4>
      <p>An alternative option if you are looking to build your pc</p>
      
    </div>
  </div>
  </div>
    )}

export default ArmadoPrincipiantes