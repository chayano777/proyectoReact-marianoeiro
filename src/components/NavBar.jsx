import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import CartWidget from './CartWidget';



const NavBar = () => {
  return (
    <div className="p-2 border-b shadow-sm flex justify-between items-center bg-orange-100">
        <div className='container mx-auto ml-8 flex items-center gap-4'>
            <img className='rounded-full' width={100} src={logo} alt="Logo de Pichonos"/>
            <Link to={"/"}className="text-3xl font-black text-red-500">Pichonos</Link>
        </div>
        <nav className='flex'>
            <ul className='flex gap-4 cursor-pointer' >
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to="/category/ropa%20bebe">Ropa</Link></li>
                <li><Link to="/category/accesorio%20bebe">Accesorios</Link></li>
            </ul>
            <Link to={"/carrito"}><CartWidget /></Link> 
        </nav>
    </div>
  )
}

export default NavBar