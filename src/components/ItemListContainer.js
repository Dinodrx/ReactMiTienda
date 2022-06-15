import ItemCounts from './ItemCounts';
import ItemLits from './ItemList';



const ItemListContainer = (prop) => {
    
    return<>
        <p>
            {prop.greeting}
        </p>
        <ItemLits/>
        {/* <ItemCounts stock = {5} initial = {1} onAdd ={()=>{}}/> */}
    </>
}


export default ItemListContainer