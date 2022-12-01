import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav"
import "../estilos/About.css";



const About =() =>{

    return(
        <Container fluid className="cont_layout">
        <Row xs={1} className="justify-content-md-center w-80">
            <div className="alcance" ></div>
        </Row>
        <Row xs={1} className="justify-content-md-center w-80">
            <Row className="fondoB">
                <Row className="format">
                    <p id="letra"><i>CHECKOUT OUR LATEST BUILD AND MAKE IT YOUR</i></p>
                </Row>
               <Row className="own">
                    <p id="letra"><i>OWN!</i></p>
                </Row> 
                <Row className="flexi">
                    <Image src={`${RUTA_BACKEND}/HR/coding.png`} id="imagen15"/>
                    <Row className="alinearl">
                        <p id="letra3"><i>OUR MISSION IS TO BUILD GAMING PCS AT THE</i></p>
                        <p id="letra3"><i>BEST PRICE WITHOUT CUTTING CORNERS.</i></p>
                    </Row>
                </Row>
            </Row>
        
        </Row>
        <Row xs={1} className="justify-content-md-center w-80">
            <Row className="fondoA" >
                <Row className="button"><Nav.Link href="/PaginaPrincipal"><Button id="Boton_h15">Let's Build</Button></Nav.Link>
                </Row>
            </Row>
        </Row>
        </Container>
    )

}

export default About;