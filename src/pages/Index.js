import React from 'react';
import "../styles/components/pages/Index.css";

const Index = (props) => {
    return (
        <main className="holder">
            <div className="inicio">
                <h2>Bienvenidos</h2>
                <p>Somos un grupo reducido de voluntarios. Llevamos adelante el Refugio y colaboramos con una enorme demanda
                    de casos por abandono y maltrato animal en nuestra ciudad: San Vicente, BsAs. </p>
                <p>Buscamos consientizar a la sociedad y lograr una mayor colaboración con la causa, además de promover los
                    cuidados necesarios para sus mascotas.</p>
                <br/>
            </div>
            <div>
                <h2>Noticias y mensajes importantes</h2>
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <img src="img/home/castraciones.jpg" alt="castraciones" />
                </section>
                <section className="testimonios">
                    <img src="img/home/compromiso.jpg" /*style="margin-left: 10px;"*/ alt="compromiso" />
                </section>
            </div>
            <div>
                <h2>Sección corazón</h2>
                <p>En esta página también queremos mosrar con memes o imágenes, historias que recibimos por las redes, cómo
                    estos angelitos logran cambiar nuestras vidas al decidir ayudarlos.</p>
                <p>Envianos tu historia, fotos tiernas o graciosas que demuestren el amor mutuo en sus familias.</p>
                <br />
            </div>
            <div className="memes">
                <section className="meme">
                    <img src="img/home/oscarin1.jpg" alt="oscarin1" />
                </section>
                <section className="meme">
                    <img src="img/home/oscarin2.jpg" alt="oscarin2" />
                </section>
                <section className="meme">
                    <img src="img/home/oscarin3.jpg" alt="oscarin3" />
                </section>
            </div>
        </main>
    );
}

export default Index;