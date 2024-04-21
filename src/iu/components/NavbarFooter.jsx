import { RiHomeLine, RiHeart3Line, RiFireLine, RiSettings5Line, } from "react-icons/ri";
import {  NavLink } from "react-router-dom";

export const NavbarFooter = () => {
    return (
        <>
            <footer className="menu">
                <div className="menu-inner">
                    <NavLink 
                        className={ ({isActive}) => `menu-item   ${ isActive ? 'active':'' }` } 
                        to="/"
                    >
                        <RiHomeLine className="ai-home"/>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `menu-item   ${ isActive ? 'active':'' }` }
                        to="/favorito"
                    >
                        <RiHeart3Line className="ai-heart"/>
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `menu-item  ${ isActive ? 'active':'' }` }
                        to="/favorit"
                    ><RiFireLine className="ai-fire"/>
                        
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `menu-item  ${ isActive ? 'active':'' }` }
                        to="/favori"
                    ><RiSettings5Line className="ai-gear"/>
                        
                    </NavLink>
                </div>
            </footer>
        </>
        
    )
}
