import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/pages/Ayudar.css";

const Ayudar = (props) => {
return (
<main className="holder">
    <h2>¿QUERÉS AYUDARNOS?</h2>
    <div className="tipoDonacion">
        <img src="img/ayudar/transferencia.jpg" alt="transferencia" />
        <div className="info">
            <h3>DONÁ VÍA CUENTA BANCARIA</h3>
            <p>Banco Santander Rio</p>
            <p>Alias: refugio.miguau</p>
            <p>Cta $ 547-358007/9</p>
            <p>CBU 0720547788000035800780</p>
            <p>CUIT 30-71218593-0</p>
        </div>
    </div>
    <div className="tipoDonacion">
        <img src="img/ayudar/mercadopago.jpg" alt="mercadopago" />
        <div className="info">
            <h3>DONÁ POR MERCADO PAGO</h3>
            <h4>$200 - <a href='https://mpago.la/2eeP6P5'>DONAR</a></h4>
            <h4>$300 - <a href='https://mpago.la/1hXvLEg'>DONAR</a></h4>
            <h4>$500 - <a href='https://mpago.la/1ZzvMcd'>DONAR</a></h4>
            <h4>$1000 - <a href='https://mpago.la/2PvFQoc'>DONAR</a></h4>
        </div>
        <div className="info">
            <h4>$1500 - <a href='https://mpago.la/1dpRS1v'>DONAR</a></h4>
            <h4>$2000 - <a href='https://mpago.la/1nokYZF'>DONAR</a></h4>
            <h4>$5000 - <a href='https://mpago.la/331YWCc'>DONAR</a></h4>
        </div>
    </div>
    <div className="tipoDonacion">
        <img src="img/ayudar/insumos.jpg" alt="insumos" />
        <div className="info">
            <h3>DONÁ MEDICAMENTOS E INSUMOS</h3>
            <p>Estos son los medicamentos e insumos que más necesitamos:</p>
            <ul>
                <li>Amoxicilina Clavulánico comprimidos de 250, 500, 750 o 1 gr., y también inyectable</li>
                <li>Cefalexina comprimidos por 250, 500 o 1 gr.</li>
                <li>Ceftriaxona inyectable</li>
                <li>Totralzol</li>
                <li>Desparasitantes (Total full, Meltra plus, Novasol, Albendazol)</li>
                <li>Metronidazol</li>
                <li>Enrofloxaxina</li>
                <li>Contal</li>
                <li>Ivermectina</li>
                <li>Vincristina</li>
                <li>Clindamicina</li>
                <li>Poulferon o Inmunogam</li>
                <li>Ecthol ambiental</li>
            </ul>
        </div>
        <div className="info">
            <br />
            <br />
            <br />
            <ul>
                <li>Amitraz</li>
                <li>Artrin o Geriox</li>
                <li>Vendas tipo cambridge</li>
                <li>Telas adhesivas de al menos 2 cm. de ancho</li>
                <li>Curabichera</li>
                <li>Agujas 25/8</li>
                <li>Vías de suero</li>
                <li>Sueros Dextrosa, Solución fisiológica y Ringer lactato</li>
                <li>Eritropoyetina</li>
                <li>Neurex</li>
                <li>Vitaminas</li>
                <li>Gentamicina</li>
                <li>Nitrofurantonina</li>
                <li>Cremas Platsul y Nitrofurazona</li>
            </ul>
        </div>
    </div>
    <div>
        <p>También recibimos todo tipo de materiales para la construcción, maderas, chapas, lonas, mediasombras, 
            mantas y cualquier elemento que creas que pueda ayudar a que nuestros MIGUAU estén mejor.</p>
    </div>
    <div className="tipoDonacion">
        <img src="img/ayudar/apadrinar.jpg" alt="insumos"/>
        <div className="info">
            <h3>APADRINÁ UN MIGUAU</h3>
            <p>Convertite en madrina o padrino de uno de nuestros perros o gatos, ayudándolo con su alimento y medicación.
                El monto lo ponés vos. Poco es mucho, todo nos sirve.</p>
            <p>Comunicate con nosotros enviando un mensaje y en el cuerpo del mismo dejanos también tu teléfono para
                contactarte.</p>
            <p>
                <Link to="/contacto">Contacto</Link>
            </p>
        </div>
    </div>
    <div className="tipoDonacion">
        <img src="img/ayudar/ubicacion.jpg" alt="insumos"/>
        <div className="info">
            <h3>VENÍ A PASEAR A LOS MIGUAU</h3>
            <p>Otra forma de colaborar es viniendo los días de visita a pasear y mimar a los MIGUAU.</p>
            <p>Recordá traer correas, lapiceras para llenar los cuestionarios de salud, repelente, protector solar (para el verano), gorrito, abrigo (para el invierno) y lo que quieras para pasar el día (bebida, comida, reposeras, etc.) 
                También podés traer arroz con pollito para los camperitos (cocidos), sin sal y sin ningún condimiento.</p>
        </div>
    </div>
    <div className="tipoDonacion">
        <img src="img/ayudar/voluntario.jpeg" alt="insumos"/>
        <div className="info">
            <h3>CONVERTITE EN VOLUNTARIO POR UN DÍA</h3>
            <p>Algo que necesitamos, y mucho, son voluntarios, que ayuden a construir y reparar caniles y mantener los diferentes sectores del refu.</p>
            <p>Así como también su colaboración para alimentarlos, administrarles su correspondiente medicina o ayudar con sus tratamientos.</p>
            <p>Sabemos que a veces no es lo más agradable, pero es liberador. Ver la evolución del lugar y de nuestros MIGUAU no tiene comparación.</p>
        </div>
    </div>
</main>
);
}

export default Ayudar;