import { RiSearchLine } from "react-icons/ri";

export const Search = () => {
    return (
        <>
            <div className="title_home">
                    <span className="span_home"> 
                        Search
                    </span>

                <section className="title">
                    <h1>Escuchando todos los días</h1>
                    <p>Busca tu canción favorita</p>
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
            </div>
        </>
    )
}
