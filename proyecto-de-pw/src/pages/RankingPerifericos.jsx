import '../estilos/ranking.css'
import G432 from '../imagenes/periphereals/audifono-logitech-g432.jpg'
import G733 from '../imagenes/periphereals/G733-WHITE.jpg'
import CLOUD from '../imagenes/periphereals/HEADSET-HYPERX-CLOUD-II.jpg'
import HYPEREX from '../imagenes/periphereals/MICROFONO-HYPERX-QUADCAST.jpg'
import G502 from '../imagenes/periphereals/MOUSE-LOGITECH-G502HERO.jpg'
import BALITIK from '../imagenes/periphereals/MOUSE_BALILIK_V2.jpg'
import RAZER from '../imagenes/periphereals/Razer_BlackWidows_V3.jpg'
import APEX from '../imagenes/periphereals/SteelSeries Apex Pro.jpg'
import G213 from '../imagenes/periphereals/Teclado-Logitech-ProdigyG213.png'
const RankingPerifericos = () =>{
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
            src={G432}
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
            src={G733}
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
            src={CLOUD}
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
            src={HYPEREX}
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
            src={G502}
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
            src={BALITIK}
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
            src={RAZER}
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
            src={APEX}
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
            src={G213}
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
  </section>
  </div>
    )
}

export default RankingPerifericos;