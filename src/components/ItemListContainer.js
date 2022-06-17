import { useEffect,useState } from 'react';
import ItemCounts from './ItemCounts';
import ItemLits from './ItemList';



const ItemListContainer = ({prop}) => {
    
    const [items, setItems] = useState([])
    
    useEffect(()=>{

        fetch("https://fakestoreapi.com/products")
        .then((respuesta) =>{
            const p = respuesta.json()
            return p
        })
        .then((productos) => {
            setItems(productos)
        })
        .catch((error) => {
            console.log("Hubo un error")
        })


    //     const MocAsync = new Promise ((res)=>{setTimeout(()=>{
    //         console.log("Pidiendo Productos...")
    //     const productosDeDB = [ "Producto 1", "Producto 2", "Producto 3"]
    //     res(productosDeDB)
    //     },2000)
    // })

    // MocAsync.then(productos => {
    //     setItems(productos)
    // })  

    console.table(items)
    const onAdd = () =>{}
        
    },[])
    return(
        <ItemLits items = {items}/>
    )
}


export default ItemListContainer