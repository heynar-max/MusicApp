import { CardArtist } from "../components/CardArtist"
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
                </section>

                <nav className="navigation">
                    <a href="#" className="navigation-item active">Descripcion</a>
                    <a href="#" className="navigation-item">Canciónes</a>
                    <a href="#" className="navigation-item">Album</a>
                    <a href="#" className="navigation-item">Artistas</a>
                </nav>

                <CardArtist/>

            </div>
        </>
    )
    }
