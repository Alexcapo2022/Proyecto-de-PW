import { useState } from "react";
import { RUTA_BACKEND } from '../conf';
const SubmitTicket =() =>{
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [description, setDescription] = useState("");
        const [phone, setPhone] = useState("");
        const [subject, setSubject] = useState("");

        const httpGuardarReporte = async (user) => {
        
            const resp = await fetch(`${RUTA_BACKEND}/reporte`, {
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
                alert("Se correctamente el reporte");
                
            }
        }

    return<div id="content-support">
        <h1>Submit request</h1>
        <div id="content-support-submit" className="mt-5">
            <p>Email</p>
            <input value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>
            <p>Name</p>
            <input value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required/>
            <p>Phone</p>
            <input value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required/>
            <p>Subject</p>
            <input value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required/>
            <p>Description</p>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required></textarea>
            <p></p>
            <button onClick={() => {
                            if (name !== "" && email !== "" ) {
                            const user = {};
                            user.correo = email;
                            user.nombre = name;
                            user.telefono = phone;
                            user.asunto = subject;
                            user.descripcion = description;
                            
                            

                            httpGuardarReporte(user);

                            setName("");
                            setEmail("");
                            setPhone("");
                            setSubject("");
                            setDescription("");
                            
                        } else {
                            alert("Completa los formularios correctamente!");
                        }
                        }}>Submit</button>
        </div>
    </div>
}

export default SubmitTicket;