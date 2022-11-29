import '../estilos/ranking.css'
import { useState } from "react";
import { useEffect } from "react";
import Periferiferico from './Perifercios';


const RankingPerifericos = () =>{

  const [listadoPeriferico,SetPeriferico] = useState([])

  const httpObtenerPeriferico = async () => {
      const resp = await fetch(`http://localhost:4444/Periferico?nombre=HEADPHONES LOGITECH G432`)
      const data = await resp.json()
      SetPeriferico(data)
      /*for (let index = 0; index < data.length; index++) {
        data[index]["Nombre"] = data[0]["Nombre"];
        console.log(data)
    }*/
      
  }

  useEffect(() => {
    httpObtenerPeriferico()
  }, [])

    return(
        <div>
    <section id="ranking">
    <div className="container_parrafo">
    <div style={{ height: 30 }} className="altura"></div>
      <h1 style={{ textAlign: "center" }}>
        THE MOST PURCHASED PERIPHERALS ON THE MARKET{" "}
      </h1>
      <p style={{ textAlign: "center", color: "black" }}>
        In this section you will find the ranking of the most purchased products
        in our store, the prices vary by the quality of the products, remember
        that we will always offer you
      </p>
    </div>
  </section>
  <div style={{ height: 150 }} className="altura"></div>
  <section>
    <div className="item_container">
      <div className="item2" id="item1">
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
            <p className="card-text">TOP 1</p>
            <p className="card-text">HEADPHONES LOGITECH G432</p>
            <p className="card-text">PRICE:$150</p>
          </div>
        </div>
      </div>
    

      <div className="item2">
        <div
          className="card border-secondary"
          style={{ width: "20rem", backgroundColor: "#4AB4DD" }}
        >
          <img
            src="http://localhost:4444/periphereals/G733.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              TOP 2
            </p>
            <p className="card-text">HEADPHONES LOGITECH G733</p>
            <p className="card-text">PRICE:$150</p>
          </div>
        </div>
      </div>
      <div className="item2">
        <div
          className="card border-secondary"
          style={{ width: "20rem", backgroundColor: "#4AB4DD" }}
        >
          <img
            src="http://localhost:4444/periphereals/CLOUD-II.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              TOP 3
            </p>
            <p className="card-text">HEADPHONE HYPERX CLOUD II</p>
            <p className="card-text">PRICE:$150</p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ height: 500 }} className="item_container">
      <div className="item">
        <div
          className="card border-secondary"
          style={{ width: "20rem", backgroundColor: "#4AB4DD" }}
        >
          <img
            src="http://localhost:4444/periphereals/QUADCAST.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              TOP 4
            </p>
            <p className="card-text">HYPERX QUADCAST</p>
            <p className="card-text">PRICE:$150</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div
          className="card border-secondary"
          style={{ width: "20rem", backgroundColor: "#4AB4DD" }}
        >
          <img
            src="http://localhost:4444/periphereals/G502HERO.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              TOP 5
            </p>
            <p className="card-text">MOUSE LOGITECH G502 HERO</p>
            <p className="card-text">PRICE:$150</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div
          className="card border-secondary"
          style={{ width: "20rem", backgroundColor: "#4AB4DD" }}
        >
          <img
            src="http://localhost:4444/periphereals/BASILISK.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              TOP 6
            </p>
            <p className="card-text">MOUSE BALITIK V2</p>
            <p className="card-text">PRICE:$150</p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ height: 500 }} className="item_container">
      <div className="item">
        <div
          className="card border-secondary"
          style={{ width: "20rem", backgroundColor: "#4AB4DD" }}
        >
          <img
            src="http://localhost:4444/periphereals/BlackWidows.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              TOP 7
            </p>
            <p className="card-text">RAZER BLACKWIDOWS V3</p>
            <p className="card-text">PRICE:$150</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div
          className="card border-secondary"
          style={{ width: "20rem", backgroundColor: "#4AB4DD" }}
        >
          <img
            src="http://localhost:4444/periphereals/Apex.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              TOP 8
            </p>
            <p className="card-text">STEELSERIES APEX PRO</p>
            <p className="card-text">PRICE:$150</p>
          </div>
        </div>
      </div>
      <div className="item">
        <div
          className="card border-secondary"
          style={{ width: "20rem", backgroundColor: "#4AB4DD" }}
        >
          <img
            src="http://localhost:4444/periphereals/Teclado-Logitech-ProdigyG213.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              TOP 9
            </p>
            <p className="card-text">G213 PRODIGY</p>
            <p className="card-text">PRICE:$150</p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ height: 500 }} className="item_container">
     <Periferiferico periferico={listadoPeriferico}>
      
     </Periferiferico>
    </div>
  </section>
  </div>
    )
}

export default RankingPerifericos;