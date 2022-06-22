import CartWidget from './CartWidget';
import{Link,NavLink} from "react-router-dom";

const NavBar = ({}) => {

    return <header>

        
        <nav className="d-flex justify-content-around">
            <Link to ="/">
                <h1>Mi Tienda</h1>
            </Link>
            <NavLink to ="./category/jewelery">jewelery</NavLink>
            <NavLink to ="./category/electronics">electronic</NavLink>
            <NavLink to ="./category/clothing">clothing</NavLink>
            <CartWidget />
        </nav> 
    </header>
}



export default NavBar