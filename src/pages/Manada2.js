import { useState, useEffect } from "react";
import "../styles/components/pages/Manada2.css";
import axios from 'axios';
import ManadaItem from "../components/manada/ManadaItem";

const Manada2 = (props) => {
    const [loading, setLoading] = useState(false);
    const [manada, setManada] = useState([]);

    useEffect(() => {
        const cargarManada = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/verManada'); 
            setManada(response.data);
            console.log("response - response.data:")
            console.log(response)
            console.log(response.data)
            setLoading(false);
        };
        cargarManada();
        
    }, []);

    return (
        <main className="holder">
            <div>
                {/* <label type="hidden">{manadaItem}</label> */}
                {
                    loading ? (
                        <p>Cargando...</p>
                    ) : (
                            manada.map(item => <ManadaItem key={item.id_animal}
                            nombre={item.nombre} especie={item.especie} 
                            edad={item.edad} tiempo={item.tiempo} 
                            sexo={item.sexo} tamanio={item.tamanio} 
                            grupo={item.grupo} observaciones={item.observaciones} 
                            estado={item.estado} historia={item.historia} 
                            id_imagen={item.id_imagen} imagen={item.imagen} />)
                            )
                        }
            </div>
        </main>
    );
}

export default Manada2;
