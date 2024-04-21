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
                            to="/bronze"
                        >
                            Bronze
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                            to="/gold"
                        >
                            Gold
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                            to="/search"
                        >
                            Search
                        </NavLink>

                        
                    </div>
            </nav>
    )
}
