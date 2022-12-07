import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/pages/Manada.css";

const Manada = (props) => {
    return (
        <main className="holder">
            <h2>Perros</h2>
            <div className="manada">
                <img src="img/manada/p_vieji.jpg" alt="pvieji"/>
                <div className="info">
                    <h4><Link to="/manada2">Viejis</Link></h4>
                    <p>La calle no es lugar para ningún perrito, menos para un viejito. Pensamos que todos algún día
                        llegaremos a esa instancia y nos gustaría que nuestra familia nos cuidara y acompañara con mucho
                        amor. Sepamos que adoptar un viejito, es algo maravilloso. Si bien muchas veces se piensa en que es
                        mejor adoptar un cachorro para que crezca con la familia, queremos decirles que los adultos y
                        viejitos tienen una capacidad inmensa de dar y recibir amor.</p>
                </div>
            </div>
            <div className="manada">
                <img src="img/manada/p_disca.jpg" alt="pdisca"/>
                <div className="info">
                    <h4><Link to="/manada2">Los luchadores</Link></h4>
                    <p>Nuestros perris especiales, que requieren otro tipo de cuidados, ya que son perros con discapacidades
                        motrices o visuales. No tienen conciencia sobre las diferencias que pueden existir con otros
                        animales y, por sobre todas las cosas, pueden ser plenamente felices. Ellos esperan una familia!
                        También abrimos las puertas para que la comunidad pueda regalarles al menos un rato de mimos y
                        juegos.</p>
                </div>
            </div>
            <div className="manada">
                <img src="img/manada/p_jovenes1.jpg" alt="pjoven"/>
                <div className="info">
                    <h4><Link to="/manada2">Jóvenes y adultos</Link></h4>
                    <p>Adoptando a un perro callejero estarás salvando su vida, ofreciéndole una segunda oportunidad de
                        tener un hogar y llevar una existencia digna y feliz. Pero además, permitís que el espacio libre lo
                        pueda ocupar otro perro, también a la espera de su familia perfecta.</p>
                </div>
            </div>
            <div className="manada">
                <img src="img/manada/p_cachorros1.jpg" alt="pcachorro"/>
                <div className="info">
                    <h4><Link to="/pCachorros">Cachorros</Link></h4>
                    <p>Actualmente en el refugio existen perros en tratamiento por enfermedades, por lo que, es una urgencia
                        poder ubicar a los cachorritos que llegan e intentar alejarlos de posibles contagios. Al adoptar o
                        transitar a nuestros bebés les estás salvando la vida!</p>
                </div>
            </div>
            <h2>Gatos</h2>
            <div className="manada">
                <img src="img/manada/g_vieji1.jpg" alt="gvieji"/>
                <div className="info">
                    <h4><Link to="/manada2">Viejis</Link></h4>
                    <p>Si bien se conoce a los gatos como animales más independientes, no es fácil llegar a una edad adulta
                        viviendo en la calle con todos los peligros que deben enfrentar cada día. Es una suerte que podamos
                        rescatar a los viejis de esa vida tan difícil y que podamos ofrecerles la posibilidad de conseguir
                        un hogar lleno de amor. No es imposible! Y es garantizado el agradecimiento que recibirán de estos
                        bombones!</p>
                </div>
            </div>
            <div className="manada">
                <img src="img/manada/g_jovenes1.jpg" alt="gjoven"/>
                <div className="info">
                    <h4><Link to="/manada2">Jóvenes y adultos</Link></h4>
                    <p>Dada la cantidad de animales en el refugio, el espacio se vuelve insuficiente y los gatos son
                        difíciles de mantener en un solo lugar de froma estricta. Realmente es necesario poder encontrarles
                        un lugar con una familia que pueda darles los cuidados y la libertad que ellos necesitan. Recuerden
                        que el amor de un animalito rescatado, es incondicional.</p>
                </div>
            </div>
            <div className="manada">
                <img src="img/manada/g_cachorros1.jpg" alt="gcachorro"/>
                <div className="info">
                    <h4><Link to="/manada2">Cachorros</Link></h4>
                    <p>Así como los perritos, los michis bebés también están a merced de contagiarse de cualquier nfermedad
                        si no se los aisla por completo del resto del refugio. Es de suma urgencia poder encontrarles una
                        familia que los ame y los cuide para siempre. Podés adoptar a nuestros gatitos entrando en la
                        sección "Adopciones"</p>
                </div>
            </div>
        </main>
    );
}

export default Manada;
