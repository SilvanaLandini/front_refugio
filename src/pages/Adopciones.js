import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/pages/Adopciones.css";

const Adopciones = (props) => {
    return (
        <main className="holder">
            <h2>¡QUIERO ADOPTAR UN CAMPERITO!</h2>
            <div className="novedades">
                <h3>¿Por qué adoptar en vez de comprar?</h3>
                <p>Porque adoptando estás salvando la vida de un animal rescatado. Cada perro o gato adoptado deja su lugar
                    para que ingrese otro y pueda ser recuperado en el refugio.</p>
                <p>Adoptar es un acto de amor y de responsabilidad, por eso es necesario estar completamente seguros de que
                    estamos capacitados y listos para tener un nuevo integrante en la familia. Un animal de compañía
                    dependerá toda su vida de nosotros. Recordá que pueden vivir entre 15 y 20 años y estás asumiendo un
                    compromiso serio por
                    todo ese tiempo.</p>
            </div>
            <div className="novedades">
                <h3>Consideraciones a tener en cuenta antes de tomar la decisión de adoptar</h3>
                <h4>Pensar en...</h4>
                <p>Integrar un perro a la familia sólo porque los niños piden un cachorrito para jugar es un gran error. Los
                    animales no son un juguete. ¿Qué pasará cuando tus hijos crezcan, o cuando se aburran de él? ¿Quién lo
                    bañará? ¿Quién lo sacará a pasear? El perro es parte de la familia y todos tienen que estar de acuerdo
                    con la adopción.</p>
                <h4>Pensar en...</h4>
                <p>Integrar un animal a la familia sólo porque los niños piden un cachorrito para jugar es un gran error.
                    Los animales no son un juguete. ¿Qué pasará cuando tus hijos crezcan, o cuando se aburran de él? ¿Quién
                    lo
                    bañará? ¿Quién lo sacará a pasear? ¿Quién cambiará sus piedritas? Será parte de la familia y
                    todos tienen que estar de acuerdo con la adopción.</p>
                <h4>Espacio y lugar donde vivirá</h4>
                <p>No todos los perros necesitan un parque para correr, pero sí espacio para moverse cómodamente por la casa
                    y un lugar diferenciado para dormir y descansar. Un gato requiere un espacio donde sentirse seguro.
                    Si hay espacios al aire libre deben estar cercados para evitar que el animal pueda escaparse. Si vivís
                    en departamento deberás considerar el tamaño del animal a la hora de elegirlo, y sobre todo su nivel de
                    actividad. La falta de grandes ambientes puede compensarse con ejercicio diario para que el animal
                    desgaste energía. Corroborá que en tu edificio esté permitido tener animales de compañía.
                    Si eligís un cachorro, averiguá antes qué tamaño tendrá cuando crezca.</p>
                <h4>Tiempo y dedicación</h4>
                <p>Es necesario que tengas tiempo para compartir con ellos. Los perros necesitan interactuar con sus dueños,
                    no pueden ser ignorados sólo porque estés ocupado o cansado. Pensá antes de adoptar si tendrás momentos
                    de juego con tu perro, si pasarás tiempo a su lado y si saldrás a caminar con él (incluso en días de
                    lluvia o frío), aún cuando vuelvas cansado del trabajo; él te estará esperando ansioso y querrá salir
                    después de estar varias horas solo. Aunque se cree que el gato es más independiente, también deberán
                    recibir su momento de mimos y la atención adecuada a sus necesidades.</p>
                <h4>Mantenimiento y gastos</h4>
                <p>Los animales tienen un calendario de vacunación anual que cumplir, más pipetas y desparasitasiones
                    periódicas. También necesitan un alimento de buena calidad, para preservar su salud, pelaje y dentadura.
                    Y hay que considerar que la atención veterinaria tiene un costo elevado. </p>
                <h4>Hábitos de vida</h4>
                <p>Evaluá si tendrás paciencia con el animal, si soportarás los pelos en las alfombras, los hoyos en el
                    jardín y algún mueble o prenda rota.
                    Si hay niños pequeños o miguaus muy mayores no es conveniente incorporar un perro de gran porte y muy
                    enérgico, ya que podría tirarlos accidentalmente jugando. Si estás muchas horas fuera tendrás que buscar
                    un perro tranquilo acostumbrado a quedarse solo.
                    Si no estás seguro si es preferible un cachorro o un adulto tené en cuenta que un cachorro requiere
                    bastante dedicación para educarlo: deberá aprender dónde hacer sus necesidades y cuáles son las cosas
                    que no debe morder y romper. Adoptar un perro adulto es una ventaja ya que la mayoría vivió antes en un
                    hogar. También tené en cuenta si viajás por trabajo o vacaciones, qué posibilidades tendrás de llevarlo
                    con vos o si alguien podrá cuidarlo en tu ausencia.</p>
                <h4>¿Es mucho?</h4>
                <p>Quizás te parezcan demasiadas preguntas para hacerse, pero muchos animales en los refugios están allí
                    porque sus dueños no pensaron realmente cuánto tiempo y dinero llevaba cuidar de ellos.
                    Ellos te darán amor incondicional, compañía y mejorarán tu vida sin dudas.</p>
            </div>
            <div className="novedades">
                <h3>Para adoptar en Mi/Gu AU</h3>
                <ul>
                    <li>Las adopciones se tratan solamente con el adoptante final, no mediante terceros.</li>
                    <li>Es requisito excluyente ser mayor de 21 años.</li>
                    <li>No damos en adopción cachorritos de menos de 5 meses cuando hay niños menores a 6 años en la casa.
                    </li>
                </ul>
                <p>Al solicitar la adopción de un camperito como primer paso enviamos un cuestionario de pre-adopción para
                    ser completado por el interesado.</p>
                <p>Luego hacemos una visita al domicilio para conocer a la familia y constatar las condiciones en que
                    vivirá nuestro camperito. </p>
                <p>En caso de aprobar la adopción, solicitamos los datos del adoptante (nombre, DNI, domicilio y
                    teléfono), de su veterinario de confianza (nombre, dirección y tel) y por último, el teléfono (de
                    línea-fijo) y dirección de 4 familiares. </p>
                <p>El adoptante deberá encargar la chapita identificatoria para el animal incluyendo nuestro teléfono. Una
                    vez que la chapita está lista coordinamos el traslado del adoptado a su hogar, donde se firma el
                    Contrato de Adopción.</p>
                <p>Todos nuestros adoptados son llevados a domicilio; sin embargo, se puede venir al refugio a conocerlos
                    previamente.</p>
                <p>Nuestros perros son entregados en adopción vacunados, desparasitados y castrados. En caso de ser un
                    cachorrito, se entrega con compromiso de castración cuando tenga la edad suficiente.</p>
                <p>Somos padrinos de nuestros perros de por vida, esto es que podrás contar con nosotros cuando lo
                    necesites, por lo cual tambien los visitamos en su hogar para ver cómo están. Estas visitas de
                    seguimiento son realizadas por animall del refugio El Campito.</p>
            </div>
            <div className="novedades">
                <h3>Finalmente...</h3>
                <p>Hay tantos rescatados esperando un hogar, que no llegamos a publicarlos. Si tenés dudas o no hiciste
                    match con ninguna foto que hayas visto, escribinos y contanos qué características te gustaría que tenga
                    tu compañero. Nos contactaremos y enviaremos fotos.</p>
                <p><Link to="/contacto">Contacto</Link></p>
                <p>Si ya estás seguro de saber a quién de nuestra manada querés cambiarle la vida, escribinos un mensaje en la sección de contacto. Podés dejarnos en el mensaje un número de teléfono por cualquier inconveniente con el mail.</p>
                {/* <form action="" method="" className="formulario">
                    <p>
                        <label form='email'>Email</label>
                        <input type='text' name=""/>
                    </p>
                    <p>
                        <input type="submit" value="Recibir el formulario"/>
                    </p>
                </form> */}
            </div>
        </main>
    );
}

export default Adopciones;