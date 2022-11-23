import { Card, Form, Button, Container, Row, Col} from 'react-bootstrap'

const Registro = () => {
    return <body className='login'><Container>
        <Row className='mt-4'>
            <Col></Col>
            <Col>
                <Card>
                    <Card.Body>
                        <h2>Registro</h2>
                        <Form>
                            <Form.Group >
                                <Form.Label>
                                    First Name
                                </Form.Label>
                                <Form.Control type='text'  />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Last Name
                                </Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Correo
                                </Form.Label>
                                <Form.Control type='email' />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Password
                                </Form.Label >
                                <Form.Control type='password'  />
                            </Form.Group>
                            <Button className='mt-3' variant='warning' href='/' >Registrarse</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
    </body>
}

export default Registro