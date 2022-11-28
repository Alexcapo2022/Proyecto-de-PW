import '../estilos/ProfileInfo.css'
const ProfileInfo = () =>{
    
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
              <input type="text" className="bg-light form-control" placeholder="Name" />
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="username">Apellido</label>
              <input type="text" className="bg-light form-control" placeholder="Username" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-md-6">
              <label htmlFor="email">Correo</label>
              <input type="text" className="bg-light form-control" placeholder="user@email.com" />
            </div>
            <div className="col-md-6">
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="bg-light form-control" placeholder="user@email.com" />
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="phone">Numero de telefono</label>
              <input type="tel" className="bg-light form-control" placeholder={+51} />
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="phone">Codigo Postal</label>
              <input type="tel" className="bg-light form-control" placeholder={31} />
            </div>
            <div className="col-md-6 pt-md-0 pt-3">
              <label htmlFor="phone">Direccion</label>
              <input type="tel" className="bg-light form-control" placeholder="namek" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-md-6">
              <label htmlFor="country">Pais</label>
              <select name="country" id="country" className="bg-light">
                <option value="india" selected>Peru</option>
                <option value="usa">USA</option>
                <option value="uk">Brasil</option>
                <option value="uae">Argentina</option>
                <option value="uae">Chile</option>
                <option value="uae">Colombia</option>
                <option value="uae">Venezuela</option>
                <option value="uae">Italia</option>
                <option value="uae">España</option>
                <option value="uae">Francia</option>
              </select>
            </div>
            <div className="col-md-6 pt-md-0 pt-3" id="lang">
              <label htmlFor="language">Departamento</label>
              <div className="arrow">
                <select name="language" id="language" className="bg-light">
                  <option value="english" selected>Ancash</option>
                  <option value="english_us">Arequipa</option>
                  <option value="enguk">Ayacucho</option>
                  <option value="arab">Callao</option>
                  <option value="arab">Cajamarca</option>
                  <option value="arab">Cusco</option>
                  <option value="arab">La libertad</option>
                  <option value="arab">Lambayeque</option>
                  <option value="arab">Lima</option>
                  <option value="arab">Pasco</option>
                  <option value="arab">Piura</option>
                  <option value="arab">Puno</option>
                  <option value="arab">San Martin</option>
                  <option value="arab">Tacna</option>
                  <option value="arab">Tumbes</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-outline-primary">Guardar cambios</button>
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

