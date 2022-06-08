import CartWidget from './CartWidget';

const NavBar = () => {

    return <header>
        <h1>Mi Tienda</h1>

        <nav className="d-flex justify-content-around">
            <a   href="#">Inicio</a>
            <a   href="#">Contacto</a>
            <a   href="#">Nosotros</a>
            <CartWidget />
        </nav> 
    </header>
}



export default NavBar