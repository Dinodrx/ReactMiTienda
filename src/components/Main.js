import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Carrito from './Carrito';
import Checkout from './Checkout';
import {Routes,Route} from "react-router-dom";


const Main = () => {

    return (
        <Routes>

            <Route path='/' element ={<ItemListContainer/>}/>
            <Route path='/category/:id' element ={<ItemListContainer/>}/>
            <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
            <Route path='/carrito' element = {<Carrito/>}/>
            <Route path='/checkout' element = {<Checkout/>}/>

        </Routes>
    )   
}


 
export default Main