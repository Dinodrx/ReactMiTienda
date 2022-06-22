import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import {Routes,Route} from "react-router-dom";

const Main = () => {

    return (
        <Routes>

            <Route path='/' element ={<ItemListContainer/>}/>
            <Route path='/category/:id' element ={<ItemListContainer/>}/>
            <Route path='/item/:id' element = {<ItemDetailContainer/>}/>

        </Routes>
    )   
}


 
export default Main