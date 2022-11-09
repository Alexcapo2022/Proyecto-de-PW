import React from "react";
import '../estilos/armadoPrincipiantes.css';
import gaming from "../imagenes/ArmadoPrincipiantes/gaming.jpg";
import design from "../imagenes/ArmadoPrincipiantes/Design.jpg";
import coding from "../imagenes/ArmadoPrincipiantes/coding.png";
import office from "../imagenes/ArmadoPrincipiantes/office.jpg";
import other from "../imagenes/ArmadoPrincipiantes/Other.jpg";
import rendering from "../imagenes/ArmadoPrincipiantes/rendering.jpg";



const ArmadoPrincipiantes = () =>{
    return(
        <div>
        <div className="container3">
    <div className="card2">
        <img src={gaming} alt="" />
      <h4>Gaming</h4>
      <p>Build the best gaming pc to play all the games</p>
      <a href="/Build Begginers/INTERFACES/Gaming.html">More</a>
    </div>
    <div className="card2">
        <img src={design} alt="" />
      <h4>Design</h4>
      <p>Build the best pc for your new creations in Photoshop</p>
      <a href="/Build Begginers/INTERFACES/Design.html">More</a>
    </div>
    <div className="card2">
    <img src={coding} alt="" />
      <h4>Coding</h4>
      <p>Build the best pc to program code quickly</p>
      <a href="/Build Begginers/INTERFACES/Coding.html">More</a>
    </div>
  </div>
  <div className="container3">
    <div className="card2">
    <img src={rendering} alt="" />
      <h4>Rendering</h4>
      <p>Build the best PC for rendering in After Effects</p>
      <a href="/Build Begginers/INTERFACES/Rendering.html">More</a>
    </div>
    <div className="card2">
    <img src={office} alt="" />
      <h4>Office</h4>
      <p>Build the best PC for your office economically</p>
      <a href="/Build Begginers/INTERFACES/Office.html">More</a>
    </div>
    <div className="card2">
        <img src={other} alt="" /> 
      <h4>Other</h4>
      <p>An alternative option if you are looking to build your pc</p>
      <a href="/Build Begginers/INTERFACES/Other.html">More</a>
    </div>
  </div>
  </div>
    )
}
export default ArmadoPrincipiantes