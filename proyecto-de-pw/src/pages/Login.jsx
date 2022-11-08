import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import "bootstrap"
const Login = () => {
    return <Container>
        <Row className='mt-4'>
            <Col></Col>
            <Col>
                <Card>
                    <Card.Body>
                        <h2>Login</h2>
                        <Image/>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Correo
                                </Form.Label>
                                <Form.Control type='email'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control type='password'/>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>
                                
                                    ¿Olvidaste la contraseña?
                                    
                            </Form.Label>
                            </Form.Group>
                            
                            <Button className='mt-2' variant='warning' >Login</Button>
                            
                            <Form.Group>
                        <Form.Label className='mt-2'>
                                    Crear Cuenta
                            </Form.Label>
                        </Form.Group>
                        </Form>
                        
                        
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
}

export default Login