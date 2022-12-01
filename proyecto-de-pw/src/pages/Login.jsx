import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import "bootstrap"
import '../estilos/login.css'
import { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false)
    const [logged,setLogged]=useState(false)
    
    const httpLogin = async (user) => {
        const resp = await fetch("http://localhost:4444/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await resp.json();
        if (data.verify) {
            // Login correcto.
            setLogged(true)
            alert(`Welcome ${user.email}.`);
            window.location.href="http://localhost:4445/PaginaPrincipal"; // Redireccion con renderizado
            localStorage.setItem("Usuario_correo",user.email)
            
        } else {
            // No existe el usuario. Error.
            setErrorLogin(true)
        }
    }
    
    return(
    <body className='login'>
    <Container>
        <Row className='mt-4'>
            <Col></Col>
            <Col>
                <Card className= 'cuadro'>
                    <Card.Body>
                        <h2>Login</h2>
                        <Image className='rounded-circle' display="block"  height="250px" width={300} src='http://localhost:4444/imagenes/usuario.jpg'/>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Correo
                                </Form.Label>
                                <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} required id="Email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control type='password' onChange={(e) => setPassword(e.target.value)} required id="Password"/>
                            </Form.Group>
                            <Form.Group>
                            </Form.Group>
                            <Form.Group>
                            <Button className='mt-2' variant='warning'  id="loginButton" type="button" /*href='/PaginaPrincipal'*/ onClick={() => {
                    if (email !== "" && password !== "") {
                        const user = {};
                        user.email = email;
                        user.password = password;
                        httpLogin(user);
                        setName("");
                        setLastName("");
                        setEmail("");
                        setPassword("");
                        

                    } else {
                        alert("Llena toda la información!");
                    }
                }} >Login</Button>{(() => {
                    if (errorLogin) {
                        return <div className="alert alert-danger">Error. El correo o contraseña es incorrecto.</div>
                    }
                })()
                }
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>
                                
                                    ¿Olvidaste la contraseña?
                                    
                            </Form.Label>
                            
                        
                        </Form.Group>
                        <Form.Group>
                        <Form.Label className='mt-2'>
                        <Button className='mt-2' variant='warning' href='/Registro'  >Registro</Button>
                            </Form.Label>
                        </Form.Group>
                        </Form>
                        
                        
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
    </body>
    )
    
}

export default Login