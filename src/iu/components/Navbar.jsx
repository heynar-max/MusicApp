import { Link, NavLink } from "react-router-dom"
import logo from '/logoM.png'
import '../../style/Navbar.css'


export const Navbar = () => {
    return (
        <nav className="nav_header">
                    <Link to="/">
                        <img className="navbar_logo" src={logo}/>
                    </Link>
                    <div className="navbar-navigation">

                        <NavLink 
                            className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` } 
                            to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                            to="/favorito"
                        >
                            Favoritos
                        </NavLink>
                        <NavLink 
                            className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                            to="/favorito"
                        >favo
                            
                        </NavLink>
                        
                    </div>
                    <div>
                        <button className="avatar">
                            <img src="https://res.cloudinary.com/dzty81hol/image/upload/v1710620894/gte9fvqfhcpavmvvrw3r.jpg" />
                        </button>
                    </div>
                        
            </nav>
    )
}
