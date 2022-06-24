import { useEffect,useState } from 'react';
import ItemCounts from './ItemCounts';
import ItemLits from './ItemList';
import {useParams} from  "react-router-dom";



const ItemListContainer = ({prop}) => {
    
    const [items, setItems] = useState([])

    const resultado = useParams()
    console.log(resultado)
    useEffect(()=>{
        
        if (resultado.id == "jewelery" ){
        fetch("https://fakestoreapi.com/products")
        .then((respuesta) =>{
            const p = respuesta.json()
            return p
        })
        
        .then((productos) => {
            setItems(productos.filter(item => item.category == "jewelery"))
        })
        
        .catch((error) => {
            console.log("Hubo un error")
        })
        
    } else if(resultado.id == "electronics" ){
         fetch("https://fakestoreapi.com/products")
         .then((respuesta) =>{
             const p = respuesta.json()
             return p
         })
        
         .then((productos) => {
             setItems(productos.filter(item => item.category == "electronics"))
         })
        
         .catch((error) => {
             console.log("Hubo un error")
         })
     } else if(resultado.id == "clothing" ){
         fetch("https://fakestoreapi.com/products")
         .then((respuesta) =>{
             const p = respuesta.json()
             return p
         })
        
         .then((productos) => {
             setItems(productos.filter(item => item.category == "women's clothing" ))
         })
        
         .catch((error) => {
             console.log("Hubo un error")
         })
     }else if(resultado.id == undefined ){
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
     }
    


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


    if (items.length > 0)
    {
    return(
        <section>
            <ItemLits items = {items}/>
            
        </section>

        
    )
    } else{
        return(
        <div>
            <p>Cargando...</p>
        </div>
        )
    }
}


export default ItemListContainer