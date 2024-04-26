import { RiHomeLine, RiHeart3Line, RiSearchLine, RiUser3Line, } from "react-icons/ri";
import {  NavLink } from "react-router-dom";

export const NavbarFooter = () => {
    return (
        <>
            <footer className="menu">
                <div className="menu-inner">
                    <NavLink 
                        className={ ({isActive}) => `menu-item   ${ isActive ? 'active':'' }` } 
                        to="/home"
                    >
                        <RiHomeLine className="ai-home"/>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `menu-item   ${ isActive ? 'active':'' }` }
                        to="/favorite"
                    >
                        <RiHeart3Line className="ai-heart"/>
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `menu-item  ${ isActive ? 'active':'' }` }
                        to="/search"
                    ><RiSearchLine />
                        
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `menu-item  ${ isActive ? 'active':'' }` }
                        to="/user"
                    ><RiUser3Line className="ai-gear"/>
                        
                    </NavLink>
                </div>
            </footer>
        </>
        
    )
}
