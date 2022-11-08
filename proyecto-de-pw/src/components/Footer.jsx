import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../estilos/Footer.css"

 function Footer () {
    return(
        <Container>
            <Row  className="Footer">
                <Row>
                    <Col  xs={5}>
                        <h5><strong>Sign up to our newsletter for the latest PC news.</strong></h5>
                        <Col  className="subscribe">
                            <Col  className="subscribes">
                                <input type="email" className="form-control" id="footer_subscribe" placeholder="Email" />
                            </Col>
                            <Col  className="subscribes">
                                <Nav.Link href=""><Button type="submit" id="subscribe_button">SUBSCRIBE</Button></Nav.Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col >
                        <Col  className="col_footer">
                            <Row><p>Build your PC</p></Row>
                            <Row><p>Why Redux</p></Row>
                            <Row><p>Support</p></Row>
                        </Col>
                    </Col>
                    <Col >
                        <Col  className="col_footer">
                            <Row><p>Good.</p></Row>
                            <Row><p>Better.</p></Row>
                            <Row><p>Best.</p></Row>
                        </Col>  
                    </Col>
                    <Col>
                        <Col  className="col_footer">
                            <Row><p>Terms & Conditions</p></Row>
                            <Row><p>Privacy Policy</p></Row>
                            <Row><p>Refund Policy</p></Row>
                        </Col>
                    </Col>
                    <Row>
                        <Col  className="networks">
                            <Nav.Link href="https://www.facebook.com" target="_blank" id="iconos"><FontAwesomeIcon icon={faFacebook}  /></Nav.Link>
                            <Nav.Link href="https://www.twitter.com" target="_blank" id="iconos"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com" target="_blank" id="iconos"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>    
                        </Col>
                        <Col  className="copyright">
                            Copyright © 2020 Build Redux. All Rights Reserved.
                        </Col>
                    </Row>    
                </Row>
            </Row>    
        </Container>
    );

}
export default Footer;