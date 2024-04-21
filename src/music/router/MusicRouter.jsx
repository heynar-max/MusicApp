import { Route, Routes } from "react-router-dom"

import { HomePage } from "../page"
import { Navbar } from "../../iu/components"
import { Favoritos } from "../page/Favoritos"


export const MusicRouter = () => {
    return (
        <>
            <Navbar/>
                <div className="router_container">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/favorito" element={<Favoritos/>}/>
                    </Routes>
                </div>
        </>
    )
}
