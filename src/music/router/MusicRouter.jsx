import { Route, Routes } from "react-router-dom"

import { HomePage } from "../page"
import { Navbar } from "../../iu/components"
import { Favoritos } from "../page/Favoritos"
import { Description } from "../page/RutasAnidadas"
import { Song } from "../page/RutasAnidadas"


export const MusicRouter = () => {
    return (
        <>
            <Navbar/>
                <div className="router_container">
                    <Routes>
                        
                        <Route path="/home/" element={<HomePage/>}>
                            {/* Rutas Anidadas  */}
                            
                            {/* <Route index>, la ruta que se renderizará cuando la URL
                            coincida exactamente con el path de la ruta principal que 
                             contiene las rutas anidadas. */}
                            <Route index element={<Description />} />
                            <Route path='song' element={<Song/>}/>
                            <Route path='album' element={<Song/>}/>
                            <Route path='artist' element={<Description/>}/>
                        </Route>

                        <Route path="/favorito" element={<Favoritos/>}/>

                        
                    </Routes>
                </div>
        </>
    )
}
