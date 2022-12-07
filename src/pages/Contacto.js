import React, { useState } from 'react';
import axios from 'axios';
import "../styles/components/pages/Contacto.css";

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label form="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} onSubmit={handleSubmit} />
                    </p>
                    <p>
                        <label form="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} onSubmit={handleSubmit} />
                    </p>
                    <p>
                        <label form="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} onSubmit={handleSubmit}></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
            <div>
                <h3>También puede comunicarse de forma privada por cualquiera de las redes facilitadas en el encabezado de
                    la página.</h3>
            </div>
        </main>
    );
}

export default Contacto;