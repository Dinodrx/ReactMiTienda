import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

const App = () => {



    return (
        <>
        <NavBar />
        <section>
            <ItemListContainer greeting = "Bienvenido!"/>
            <ItemDetailContainer/>
        </section>
        
        </>
    )   
}

export default App 