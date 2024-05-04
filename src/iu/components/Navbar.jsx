import { Link, NavLink } from "react-router-dom"
import logo from '/logoM.png'
import logo1 from '/solo.png'
import '../../style/Navbar.css'
import { NavbarFooter, Player } from "./"
import { useEffect, useState } from "react"


export const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

    useEffect(() => {
        // Función que se ejecuta cada vez que cambia el tamaño de la ventana
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800);
        };

        // Agregar un event listener para detectar cambios en el tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <nav className="nav_header">
            <Link to="/home">
                {isSmallScreen ? (
                <img className="navbar_logo" src={logo1} alt="Logo1" />
                ) : (
                <img className="navbar_logo" src={logo} alt="Logo" />
                )}
            </Link>
                <div className="navbar-navigation">

                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` } 
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                        to="/favorite"
                    >
                        Favoritos
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                        to="/search"
                    >
                        search
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                        to="/user"
                    >User
                        
                    </NavLink>
                    
                </div>

                <Link to='/user'>
                    <button className="avatar">
                        <img src="https://res.cloudinary.com/dzty81hol/image/upload/v1710620894/gte9fvqfhcpavmvvrw3r.jpg" />
                    </button>
                </Link>
                    
            </nav>

            <nav>
                <Player/>
            </nav>
            <nav>
                <NavbarFooter/>
            </nav>
            </>
    )
}
