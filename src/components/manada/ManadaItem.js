import React from 'react';


const ManadaItem = (props) => {
    const { nombre, especie, edad, tiempo, sexo, tamanio, grupo, observaciones, estado, historia, id_imagen, imagen } = props;

    return (
        //     {{!-- fila 1 --}}
        // <div class="row">
        //     <h5 class="text-end">Hola {{nombre}} <a class="btn btn-danger" href="/salir">Cerrar sesión <ion-icon
        //                 name="log-out-outline"></ion-icon></a></h5>
        // </div>

        <div className="grupo">
            <h2>{nombre}</h2>
            <div className="manada">
                <img src={imagen} alt='imagen'/>
                <div className="info">
                    <p>{sexo} de {edad} {tiempo}</p>
                    <p>{especie} tamaño {tamanio}</p>
                    <p>Se encuentra {estado}</p>
                    <p><strong>Observaciones:</strong></p>
                    <p>Pertenece al grupo de {grupo}</p>
                    <p>{observaciones}</p>
                    <p><strong>Historia</strong>:</p>
                    <p>{historia}</p>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: id_imagen }} className="idimagen" />
            <hr />
        </div>

    )
}

export default ManadaItem;