import { Card, Form, Button, Container, Row, Col} from 'react-bootstrap'
//import { useParams } from "react-router";
import { useState } from "react";

const Registro = () => {

    //const { usuarioId } = useParams() // hook para obtener el parametro que viene en el path

    
        const [name, setName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        
        const [errorRegistro, setErrorRegistro] = useState(false)
        
        const httpGuardarUsuarios = async (user) => {
        
        const resp = await fetch(`${RUTA_BACKEND}/registro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await resp.json();
        console.log(data)
        if (data.verify) {
            // Se registró satisfactoriamente.
            alert("Cuenta registrada satisfactoriamente!");
            window.location.href="http://localhost:4444/"; // Redireccion con renderizado
            localStorage.setItem("Usuario_correo",user.email)
            
        } else {
            // Correo ya registrado.
            alert("Ya existe el usuario, intente nuevamente!");
            setErrorRegistro(true)
        }
    }
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
                                <Form.Control type='text' placeholder="First Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Last Name
                                </Form.Label>
                                <Form.Control type='text' placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Correo
                                </Form.Label>
                                <Form.Control type='email' placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>
                                    Password
                                </Form.Label >
                                <Form.Control type='password' placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                            </Form.Group>
                            <a id="create-account" href="#/" ><Button className='mt-3' variant='warning' id="create-button" onClick={() => {
                            if (name !== "" && lastName !== "" && email !== "" && password !== "") {
                            const user = {};
                            user.name = name;
                            user.lastName = lastName;
                            user.email = email;
                            user.password = password;
                            user.pais ="";
                            user.address = "";
                            user.phone = "";
                            user.apartment = "";
                            user.zip = "";
                            

                            httpGuardarUsuarios(user);

                            setName("");
                            setLastName("");
                            setEmail("");
                            setPassword("");

                        } else {
                            alert("Completa los formularios correctamente!");
                        }
                        }}>Registrarse</Button></a>{(() => {
                            if (errorRegistro) {
                                return <div className="alert alert-danger">Error. El correo ya se encuentra registrado.</div>
                            }
                        })()
                        }
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