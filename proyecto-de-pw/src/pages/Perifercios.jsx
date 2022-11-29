import '../estilos/ranking.css'
const Periferiferico = (props) =>{
    return <div className="item2" id="item1">
        {props.periferico.map((r) => {
    <div
      className="card border-secondary"
      style={{ width: "20rem", backgroundColor: "#4AB4DD" }}
    >
      <img
        src="http://localhost:4444/periphereals/g432.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{r["Nombre"]}</p>
        <p className="card-text">{r["Precio"]}</p>
        <p className="card-text">{r["Descripcion"]}</p>
      </div>
    </div>
    })}  
  </div>
}

export default Periferiferico;