import { useState } from 'react';

const ItemCounts = (prop) => {



    // const contador = 0
    // const resultado = useState(0)
    // const contador = resultado[0]
    // const setContador = resultado[1]
    const [contador, setContador] = useState(prop.initial)
    console.log(contador)

    
    // const otrouseState = useState("horacio")
    // const nombre = otrouseState[0]
    // const cambiarNombre = otrouseState[1]




    const aumentarContador = () => {
        if (contador < prop.stock){
        console.log("aumentarContador")
        setContador(contador + 1)
        }
    }
    const reducirContador = () => {
        if (contador > 0){
        console.log("reducirContador")
        setContador (contador - 1)
        }
    }

    const agregarCarrito = () => {
        if(contador != 0){
        alert("Se agrego al carrito")
        setContador(prop.initial)
        }
        else {
            alert("No agrego unidades al carrito")
        }
    }

    return <>
        <p className="d-flex justify-content-center">casaca</p>
        <div className="container">
            <section className="row justify-content-md-center">
                <button className="col col-lg-2" onClick={reducirContador} >-</button>
                <p className="col-md-auto">{contador}</p>
                <button className="col col-lg-2" onClick={aumentarContador}>+</button>
            </section>
        </div>
        <div className="d-flex justify-content-center">
            <button onClick={agregarCarrito} >Agregar al carrito</button>
        </div>
            
    </>
}
    

export default ItemCounts