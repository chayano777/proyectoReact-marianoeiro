import logo from '../assets/img/logo.png';
import CartWidget from './CartWidget';



const NavBar = () => {
  return (
    <div className="p-2 border-b shadow-sm flex justify-between items-center">
        <div className='container mx-auto ml-8 flex items-center gap-4'>
            <img width={100} src={logo} alt="Logo de Pichonos"/>
            <a className="text-3xl font-black text-red-500" href="/">Pichonos</a>
        </div>
        <nav className='flex'>
            <ul className='flex gap-4' >
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    </div>
  )
}

export default NavBar