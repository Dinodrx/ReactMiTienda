import { useEffect } from "react"
import { useState } from "react"
import Item from "./Item"

const ItemLits = (prop) => {

    const [items, setItems] = useState([])
    
    useEffect(()=>{

        const MocAsync = new Promise ((res)=>{setTimeout(()=>{
            console.log("Pidiendo Productos...")
        const productosDeDB = [ "Producto 1", "Producto 2", "Producto 3"]
        res(productosDeDB)
        },2000)
    })

    MocAsync.then(productos => {
        setItems(productos)
    })  
        
    },[])

    if (items.length > 0)
    {
    return <>
        <Item stock = {5} title = "Polo" id= "Ropa de Hombre"/>
    </>

}else{
    return(
    <div>
        <h2>{prop.greeting}</h2>
        <p>Cargando...</p>
    </div>
    )
}
}


export default ItemLits