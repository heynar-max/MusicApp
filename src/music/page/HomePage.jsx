import { Link, NavLink, Outlet} from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";



export const HomePage = () => {

    
    return (
        <>
            <div className="title_home">
                    <span className="span_home"> 
                        Home 
                    </span>

                <section className="title">
                    <h1>Escuchando todos los días</h1>
                    <p>Explora millones de música según tu gusto</p>
                </section>

                <section className="search">
                        <Link to='/search' className="search_link">
                            <div className="search-inner">
                                <button className="search-button">
                                    <RiSearchLine className="ai-search"/>
                                </button>
                                <input 
                                type="text" 
                                className="search-input" 
                                placeholder="Buscar Canción" 
                                />
                            </div>
                        </Link>
                        
                </section>

                <nav className="navigation">
                
                    {/* end: es una prop especial de React Router que indica que este 
                    enlace debe coincidir exactamente con la URL especificada en TO. 
                    El enlace solo será activo si la URL es /home y no si tiene subrutas 
                    adicionales como /home/description */}
                    <NavLink to='/home' end className={ ({isActive}) => `navigation-item   ${ isActive ? 'active':'' }` }>Descripcion</NavLink>
                    <NavLink to={'song'} className={ ({isActive}) => `navigation-item   ${ isActive ? 'active':'' }` } >Canciones</NavLink>
                    <NavLink to={'album'} className={ ({isActive}) => `navigation-item   ${ isActive ? 'active':'' }` }>Album</NavLink>
                    <NavLink to={'artist'} className={ ({isActive}) => `navigation-item   ${ isActive ? 'active':'' }` }>Artistas</NavLink>
                </nav>
                    <Outlet/>
            </div>
        </>
    )
    }
