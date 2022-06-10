import ItemCounts from './ItemCounts';



const ItemListContainer = (prop) => {
    
    return<>
        <p>
            {prop.greeting}
        </p>
        <ItemCounts stock = {5} initial = {1} onAdd ={()=>{}}/>
    </>
}


export default ItemListContainer