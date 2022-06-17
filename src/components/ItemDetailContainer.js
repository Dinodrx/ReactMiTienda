import { useEffect,useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

   const [item, setItem] = useState({})

   useEffect (()=>{
    fetch("https://fakestoreapi.com/products/1")
        .then(res=>res.json())
        .then(json=> setItem(json))
        

   })

   return (
    <ItemDetail item ={item}/>
)
}

    

export default ItemDetailContainer