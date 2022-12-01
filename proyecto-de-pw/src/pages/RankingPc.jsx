import { Container, Row, Col } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'

const RankingPc = () =>{
    const container = {
        textAlign: "left",
        alignItems: "left",
        marginLeft: "90px"
    }
    const containerTitulo = {
        marginLeft: "0px",
        marginTop: "60px",
        marginBottom: "30px",
        textAlign: "left",
        color: "white"
    }
    const mystyle = {
        width: "60px",
        height: "60px",
        padding: "1x"
    };
    const imagen = {
        display: "flex",
        width: "15%",
        textAlign: "center",
        alignItems: "center"
    }
    const nombre = {
        marginRight: "20px",
        marginTop: "15px",
        width: "75%",
        textAlign: "left",
        alignItems: "center",
        fontSize: "x-large"
    }
    const precio = {
        textAlign: "left",
        marginTop: "15px",
        width: "15%",
        fontSize: "x-large"
    }

    const filaLista = {
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        width: "75%",
        paddingLeft: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "x-large",
        backgroundImage: "linear-gradient(180deg, blue 100%, green 0%)",
        color: "white"
    }
    const acordion = {
        width: "80%",
        height: "100%",
        border: "none"
    }
    const acordionpart = {
        border: "none",
        marginTop: "10px"
    }
    const partes = {
        padding: "0px",
        backgroundColor: "#282c34",
        border: "none"
    }
    return (
        <Container style={container}>
            <Row style={containerTitulo}>
                <h1>Ranking best sellers builds</h1>
            </Row>
            <Row>
                <Accordion defaultActiveKey="0" style={acordion}>
                    <Accordion.Item eventKey="0" style={acordionpart}>
                        <Accordion.Header
                        ><Container>
                            <Row>
                                <Col style={imagen}>
                                    <img src={'http://locahost:4444/Componentes/pcgamer.png'} alt="" style={mystyle}>
                                    </img>
                                </Col>
                                <Col xs={5} style={nombre}>
                                    <p>Monster PC</p>
                                </Col>
                                <Col style={precio}>
                                    <p>$1899</p>
                                </Col>
                            </Row>
                            </Container>
                        </Accordion.Header>
                        <Accordion.Body style={partes}>
                            <ListGroup>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={'http://locahost:4444/Componentes/intelcore.png'} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Intel Core I9-12700F 12-Core</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$339</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={'http://locahost:4444/Componentes/nvidia2.png'} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>NVIDIA geforce RTX 3070 8GB (VR READY)</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$599</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={'http://locahost:4444/Componentes/DDR4.png'} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>16GB DDR4 dual channel</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$79</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={'http://locahost:4444/Componentes/SSD.png'} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>1TB NVME M.2</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$99</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/DDR4.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>CM MasterLiquid ML240L</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$99</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/fan.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>QTY 4X CM MasterFans RGB</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$49  </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/pcgamer.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Cooler Master TD5000 RGB</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$129</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/fuente.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>700W ATX 80 Plus Gold</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$89</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/motherb.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Asus B660 Series | Intel</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$149</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={acordionpart}>
                        <Accordion.Header
                        ><Container>
                                <Row>
                                    <Col style={imagen}>
                                        <img src={`/src/imagenes/Componentes/pcgamer.png`} alt="" style={mystyle}>
                                        </img>
                                    </Col>
                                    <Col xs={5} style={nombre}>
                                        <p>Cruiser Build</p>
                                    </Col>
                                    <Col style={precio}>
                                        <p>$1759</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Accordion.Header>
                        <Accordion.Body style={partes}>
                            <ListGroup>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/intelcore.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Intel Core I9-12700F 12-Core</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$339</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/nvidia2.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>NVIDIA geforce RTX 3070 8GB (VR READY)</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$599</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src= {`/src/imagenes/Componentes/DDR4.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>16GB DDR4 dual channel</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$79</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/SSD.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>1TB NVME M.2</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$99</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/DDR4.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>CM MasterLiquid ML240L</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$99</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={'/src/imagenes/Componentes/fan.png'} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>QTY 4X CM MasterFans RGB</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$49  </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/pcgamer.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Cooler Master TD5000 RGB</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$129</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/fuente.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>700W ATX 80 Plus Gold</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$89</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/motherb.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Asus B660 Series | Intel</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$149</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" style={acordionpart}>
                        <Accordion.Header
                        ><Container>
                                <Row>
                                    <Col style={imagen}>
                                        <img src={`/src/imagenes/Componentes/pcgamer.png`} alt="" style={mystyle}>
                                        </img>
                                    </Col>
                                    <Col xs={5} style={nombre}>
                                        <p>Nasa PC</p>
                                    </Col>
                                    <Col style={precio}>
                                        <p>$1679</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Accordion.Header>
                        <Accordion.Body style={partes}>
                            <ListGroup>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/intelcore.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Intel Core I9-12700F 12-Core</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$339</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/nvidia2.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>NVIDIA geforce RTX 3070 8GB (VR READY)</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$599</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/DDR4.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>16GB DDR4 dual channel</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$79</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/SSD.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>1TB NVME M.2</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$99</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/DDR4.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>CM MasterLiquid ML240L</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$99</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/fan.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>QTY 4X CM MasterFans RGB</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$49  </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/pcgamer.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Cooler Master TD5000 RGB</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$129</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/fuente.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>700W ATX 80 Plus Gold</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$89</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/motherb.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Asus B660 Series | Intel</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$149</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" style={acordionpart}>
                        <Accordion.Header
                        ><Container>
                                <Row>
                                    <Col style={imagen}>
                                        <img src={`/src/imagenes/Componentes/pcgamer.png`} alt="" style={mystyle}>
                                        </img>
                                    </Col>
                                    <Col xs={5} style={nombre}>
                                        <p>Budget Build</p>
                                    </Col>
                                    <Col style={precio}>
                                        <p>$1299</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Accordion.Header>
                        <Accordion.Body style={partes}>
                            <ListGroup>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/intelcore.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Intel Core I9-12700F 12-Core</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$339</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/nvidia2.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>NVIDIA geforce RTX 3070 8GB (VR READY)</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$599</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/DDR4.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>16GB DDR4 dual channel</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$79</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/SSD.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>1TB NVME M.2</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$99</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/DDR4.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>CM MasterLiquid ML240L</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$99</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/fan.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>QTY 4X CM MasterFans RGB</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$49  </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={'/src/imagenes/Componentes/pcgamer.png'} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Cooler Master TD5000 RGB</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$129</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/fuente.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>700W ATX 80 Plus Gold</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$89</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                                <ListGroup.Item style={filaLista}>
                                    <Container>
                                        <Row>
                                            <Col style={imagen}>
                                                <img src={`/src/imagenes/Componentes/motherb.png`} alt="" style={mystyle}>
                                                </img>
                                            </Col>
                                            <Col xs={5} style={nombre}>
                                                <p>Asus B660 Series | Intel</p>
                                            </Col>
                                            <Col style={precio}>
                                                <p>$149</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    )

}

export default RankingPc;