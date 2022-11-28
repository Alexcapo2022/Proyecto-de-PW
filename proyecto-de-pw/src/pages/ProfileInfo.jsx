import '../estilos/ProfileInfo.css'
import { useState } from "react";
import { useEffect } from "react";

const ProfileInfo = () =>{

  const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [contra,setContra]=useState("");
    const [department,setDepartment]=useState("");
    const [country,setCountry]=useState("");
    const [zip,setZip]=useState("");
    const [phone,setPhone]=useState("");
    const [modTrigger, setModTrigger]=useState(false);
    const [errorCorreo,setErrorCorreo]=useState(false);
    const [Usuario,setUsuario]=useState([])
    const [errorRegistro, setErrorRegistro] = useState(false)

    useEffect(() => {
      if(errorCorreo === false && modTrigger){
          console.log("Entro!")
          const tempUser={};
          tempUser.Usuario_id=Usuario.Usuario_id;
          tempUser.Nombre=name;
          tempUser.Apellido=lastName;
          tempUser.Correo=email;
          tempUser.Direccion=address;
          tempUser.Departamento=department;
          tempUser.Password=contra;
          tempUser.Pais=country;
          tempUser.Codigo_postal=zip;
          tempUser.Telefono=phone;
          localStorage.setItem("user",JSON.stringify(tempUser));
          localStorage.setItem("Usuario_correo", email);
          
      }
    }, [errorCorreo]);

    const httpModificarUsuario = async (user) => {
        
      const resp = await fetch("http://localhost:4444/registro/:correo", {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
      });
      const data = await resp.json();
      console.log(data)
      if (data.verify) {
          // Se registró satisfactoriamente.
          alert("Cuenta registrada satisfactoriamente!");
          //setSelection("login");
      }
  }


    

  
    
    


  
    
    return(
        <div className="wrapper bg-white mt-sm-5">
        <h4 className="pb-4 border-bottom">Editar Perfil</h4>
        <div id="logo" className="d-flex align-items-start py-3 border-bottom">
          <img src="http://localhost:4444/icons/logousuario.png" className="img" alt="" />
        </div>
        <p >Foto de perfil</p>
        <div>
          <button id="btn-sub" type="button" className="btn btn-outline-secondary btn-sm btn-block ">Upload</button>
        </div>
        <div className="py-2">
          <div className="row py-2">
            <div className="col-md-6">
              <label htmlFor="firstname">Nombre</label>
              <input type="text" className="bg-light form-control" placeholder="Name" value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="username">Apellido</label>
              <input type="text" className="bg-light form-control" placeholder="Last Name" value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-md-6">
              <label htmlFor="email">Correo</label>
              <input type="text" className="bg-light form-control" placeholder="user@email.com" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="bg-light form-control" placeholder="user@email.com" value={contra} onChange={(e) => setContra(e.target.value)}/>
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="phone">Numero de telefono</label>
              <input type="tel" className="bg-light form-control" placeholder={+51} value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="phone">Codigo Postal</label>
              <input type="tel" className="bg-light form-control" placeholder={31}  value={zip} onChange={(e) => setZip(e.target.value)} />
            </div>
            <div className="col-md-6ss pt-md-0 pt-3">
              <label htmlFor="phone">Direccion</label>
              <input type="tel" className="bg-light form-control" placeholder="namek" value={address}
                onChange={(e) => setAddress(e.target.value)}/>
            </div>
            
          </div>
          <div className="row py-2">
            <div className="col-md-6">
            <label htmlFor="phone">Perú</label>
              <input type="tel" className="bg-light form-control" placeholder="namek" value={country}
                onChange={(e) => setCountry(e.target.value)}/>
            </div>
          </div>

          <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="depart">Departamento</label>
              <input type="text" className="bg-lighdt form-control" placeholder={52}   onChange={(e) => setDepartment(e.target.value)} />
            </div>
          
       
          <div>
            <button type="button" className="btn btn-outline-primary" onClick={()=>{
                        if (name!=="" && lastName!=="" && email!==""){
                            const user = {};
                            user.Usuario_id=Usuario.Usuario_id;
                            user.nombre=name;
                            user.apellido=lastName;
                            user.correo=email;
                            user.direc=address;
                            user.departamento=department;
                            user.contra=contra;
                            user.Pais=country;
                            user.cp=zip;
                            user.celular=phone;
                            httpModificarUsuario(user);

                            setName("");
                            setDepartment("");
                            setLastName("");
                            setEmail("");
                            setContra("");
                            setAddress("");
                            setZip("");
                            setPhone("");
                            
                        }else{
                            alert("At least fill the fullname, email and password");
                        }
                    }}
                    >Guardar cambios</button>{(() => {
                      if (errorCorreo) {
                          return <div className="alert alert-danger">Error. El correo ya se encuentra registrado.</div>
                      } else {
                          return <div></div>
                      }
                  })()}
            <button type="button" className="btn btn-outline-secondary">Cancelar</button>
          </div>
          <div className="d-sm-flex align-items-center pt-3" id="deactivate">
            <div>
              <p>Desactivar cuenta</p>
              <p>Detalles de la cuenta y contraseña</p>
            </div>
          </div>
          <button className="btn danger btn-primary">Desactivar</button>
        </div>
      </div>
    )
}
export default ProfileInfo

